import Subtitles from "../Subtitles";
import Button from "../Button";
import { FormDeddy, FormContainer, Input, Area, Span } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const schema = yup.object({
  name: yup.string().trim().required("Informe seu nome"),
  email: yup.string().trim().email("Informe um e-mail válido").required("Informe seu e-mail"),
  number: yup.string().trim().required("Informe seu telefone")
    .test("phone", "Informe um telefone com DDD válido", value => {
      const digits = (value || "").replace(/\D/g, "");
      return digits.length === 10 || digits.length === 11;
    }),
  subject: yup.string().trim().required("Informe o assunto"),
  message: yup.string().trim().required("Escreva sua mensagem"),
}).required();

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const sendEmail = async (data) => {
    try {
      const emailData = {
        subject: data.subject,
        name: data.name,
        email: data.email,
        number: data.number,
        message: data.message,
      };

      await emailjs.send(
        "service_fpz92le",
        "template_8082bd8",
        emailData,
        "lumHRW6doBVW8kgam"
      );

      toast.success("Mensagem enviada com sucesso!", { theme: "dark" });
      reset();
    } catch (error) {
      toast.error("Não foi possível enviar. Tente novamente ou use o e-mail de contato.", { theme: "dark" });
    }
  };

  return (
    <>
      <FormDeddy noValidate onSubmit={handleSubmit(sendEmail)}>
        <Subtitles>Fale Comigo</Subtitles>
        <FormContainer>
          <div>
            <Input id="contact-name" aria-label="Nome completo" aria-invalid={!!errors.name}
              autoComplete="name" {...register("name")} placeholder="Nome completo" />
            {errors.name && <Span role="alert">{errors.name.message}</Span>}
          </div>
          <div>
            <Input id="contact-email" type="email" aria-label="E-mail" aria-invalid={!!errors.email}
              autoComplete="email" {...register("email")} placeholder="E-mail" />
            {errors.email && <Span role="alert">{errors.email.message}</Span>}
          </div>
          <div>
            <Input id="contact-phone" type="tel" aria-label="Telefone com DDD" aria-invalid={!!errors.number}
              autoComplete="tel" {...register("number")} placeholder="Telefone com DDD" />
            {errors.number && <Span role="alert">{errors.number.message}</Span>}
          </div>
          <div>
            <Input id="contact-subject" aria-label="Assunto" aria-invalid={!!errors.subject}
              {...register("subject")} placeholder="Assunto" />
            {errors.subject && <Span role="alert">{errors.subject.message}</Span>}
          </div>
          <div>
            <Area id="contact-message" aria-label="Mensagem" aria-invalid={!!errors.message}
              rows="6" {...register("message")} placeholder="Mensagem" />
            {errors.message && <Span role="alert">{errors.message.message}</Span>}
          </div>
        </FormContainer>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </FormDeddy>
      <ToastContainer position="top-right" autoClose={4000} />
    </>
  );
};

export default Form;
