import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import { FormDeddy, FormContainer, Input, Area, Span } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const commonDomainTypos = {
  "gail.com": "gmail.com",
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmail.con": "gmail.com",
  "hotnail.com": "hotmail.com",
  "hotmai.com": "hotmail.com",
  "outlok.com": "outlook.com",
  "outlook.con": "outlook.com",
  "yaho.com": "yahoo.com",
};

const schema = yup.object({
  name: yup.string().trim().min(2, "Digite pelo menos 2 caracteres").max(90).required("Informe seu nome"),
  email: yup.string().trim().required("Informe seu e-mail")
    .email("Informe um e-mail válido")
    .matches(/^[^\\s@]+@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}$/, "Informe um domínio completo, como exemplo.com")
    .test("common-domain-typos", function (value) {
      if (!value || !value.includes("@")) return true;
      const domain = value.split("@").pop().toLowerCase();
      const suggestion = commonDomainTypos[domain];
      return !suggestion || this.createError({ message: `Você quis dizer @${suggestion}?` });
    }),
  number: yup.string().trim().test("phone", "Informe um telefone com DDD válido", value => {
    const digits = (value || "").replace(/\D/g, "");
    return !digits || ((digits.length === 10 || digits.length === 11) && /^[1-9]{2}/.test(digits));
  }),
  subject: yup.string().trim().min(3, "Descreva brevemente o assunto").max(120).required("Informe o assunto"),
  message: yup.string().trim().min(15, "Conte um pouco mais (mínimo de 15 caracteres)").max(3000).required("Escreva sua mensagem"),
}).required();

const Form = () => {
  const sendingRef = useRef(false);
  const [sendStatus, setSendStatus] = useState({ type: "", message: "" });
  const [isOnline, setIsOnline] = useState(() => typeof navigator === "undefined" || navigator.onLine);
  useEffect(() => {
    const updateConnection = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateConnection);
    window.addEventListener("offline", updateConnection);
    return () => {
      window.removeEventListener("online", updateConnection);
      window.removeEventListener("offline", updateConnection);
    };
  }, []);
  const { register, handleSubmit, setFocus, formState: { errors, isSubmitting, touchedFields, dirtyFields }, reset } = useForm({
    resolver: yupResolver(schema), mode: "onChange", reValidateMode: "onChange", defaultValues: { name: "", email: "", number: "", subject: "", message: "" }
  });
  const fieldFeedback = (field) => !errors[field] && touchedFields[field] && dirtyFields[field];
  const sendEmail = async data => {
    if (!navigator.onLine) {
      setSendStatus({ type: "error", message: "Você está sem conexão. Verifique a internet e tente novamente." });
      return;
    }
    if (sendingRef.current) return;
    sendingRef.current = true;
    setSendStatus({ type: "loading", message: "Enviando sua mensagem..." });
    try {
      const response = await emailjs.send("service_fpz92le", "template_8082bd8", {
        name: data.name.trim(),
        from_name: data.name.trim(),
        email: data.email.trim(),
        from_email: data.email.trim(),
        reply_to: data.email.trim(),
        number: data.number.trim() || "Não informado",
        phone: data.number.trim() || "Não informado",
        subject: data.subject.trim(),
        title: data.subject.trim(),
        message: data.message.trim(),
      }, "lumHRW6doBVW8kgam");
      if (response.status !== 200) throw new Error(`EmailJS retornou status ${response.status}`);
      toast.success("Envio aceito pelo serviço de e-mail!", { theme: "dark" });
      reset();
      setSendStatus({ type: "success", message: "Envio aceito pelo serviço de e-mail. Verifique a caixa de entrada e o spam." });
    } catch (error) {
      console.error("Falha no envio de contato", error);
      const details = !navigator.onLine ? "Sem conexão com a internet" : (error?.status === 429 ? "Limite de envios atingido. Aguarde antes de tentar novamente" : "Verifique sua conexão ou tente novamente mais tarde");
      // O erro técnico completo fica apenas no console, sem expor dados internos ao visitante.
      toast.error("Não foi possível enviar agora. Você também pode entrar em contato por e-mail.", { theme: "dark" });
      setSendStatus({ type: "error", message: `Falha no envio: ${details}. Confira o EmailJS ou tente novamente.` });
    } finally {
      sendingRef.current = false;
    }
  };
  const onInvalid = invalid => {
    setSendStatus({ type: "error", message: "Confira os campos destacados antes de enviar." });
    const firstInvalid = ["name", "email", "number", "subject", "message"].find(field => invalid[field]);
    if (firstInvalid) setFocus(firstInvalid);
  };
  return (
    <>
      <FormDeddy noValidate onSubmit={handleSubmit(sendEmail, onInvalid)} aria-busy={isSubmitting}>
        <div className="form-heading">
          <span className="form-eyebrow">CONTATO DIRETO</span>
          <h2>Conte sua ideia</h2>
          <p>Preencha os campos abaixo. Respondo assim que possível.</p>
        </div>
        {!isOnline && <div className="connection-warning" role="alert">Você está offline. Seus dados permanecem no formulário; reconecte-se para enviar.</div>}
        <FormContainer>
          <div>
            <label htmlFor="contact-name">Seu nome <span aria-hidden="true">*</span></label>
            <Input id="contact-name" data-valid={fieldFeedback("name") ? "true" : undefined} maxLength={90} required autoComplete="name" placeholder="Como posso chamar você?" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} />
            {errors.name && <Span id="name-error" role="alert">{errors.name.message}</Span>}
          </div>
          <div>
            <label htmlFor="contact-email">Seu e-mail <span aria-hidden="true">*</span></label>
            <Input id="contact-email" data-valid={fieldFeedback("email") ? "true" : undefined} maxLength={254} required type="email" autoComplete="email" placeholder="voce@exemplo.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
            {errors.email && <Span id="email-error" role="alert">{errors.email.message}</Span>}
          </div>
          <div>
            <label htmlFor="contact-phone">Telefone <small>(opcional)</small></label>
            <Input id="contact-phone" data-valid={fieldFeedback("number") ? "true" : undefined} maxLength={20} type="tel" autoComplete="tel" inputMode="tel" placeholder="(21) 99999-9999" aria-invalid={!!errors.number} aria-describedby={errors.number ? "phone-error" : undefined} {...register("number")} />
            {errors.number && <Span id="phone-error" role="alert">{errors.number.message}</Span>}
          </div>
          <div>
            <label htmlFor="contact-subject">Assunto <span aria-hidden="true">*</span></label>
            <Input id="contact-subject" data-valid={fieldFeedback("subject") ? "true" : undefined} maxLength={120} required placeholder="Ex.: Projeto de site" aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-error" : undefined} {...register("subject")} />
            {errors.subject && <Span id="subject-error" role="alert">{errors.subject.message}</Span>}
          </div>
          <div>
            <label htmlFor="contact-message">Sua mensagem <span aria-hidden="true">*</span></label>
            <Area id="contact-message" data-valid={fieldFeedback("message") ? "true" : undefined} maxLength={3000} required rows="5" placeholder="Conte o que você precisa, seus objetivos e como posso ajudar..." aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} {...register("message")} />
            {errors.message && <Span id="message-error" role="alert">{errors.message.message}</Span>}
          </div>
        </FormContainer>
        {sendStatus.message && (
          <div className={`send-status ${sendStatus.type}`} role={sendStatus.type === "error" ? "alert" : "status"} aria-live={sendStatus.type === "error" ? "assertive" : "polite"}>
            <span aria-hidden="true">{sendStatus.type === "success" ? "✓" : sendStatus.type === "error" ? "!" : "…"}</span>
            <span>{sendStatus.message}</span>
          </div>
        )}
        <Button type="submit" disabled={isSubmitting || !isOnline}>{isSubmitting ? "Enviando mensagem..." : "Enviar mensagem ↗"}</Button>
        <p className="form-note">* Campos obrigatórios. Se preferir, escreva diretamente para <a href="mailto:pietro.candido.work@gmail.com">meu e-mail</a>.</p>
      </FormDeddy>
      <ToastContainer position="top-right" autoClose={5000} newestOnTop closeOnClick pauseOnHover theme="dark" style={{ zIndex: 9999 }} />
    </>
  );
};
export default Form;
