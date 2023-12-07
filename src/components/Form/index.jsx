import React from "react";
import Subtitles from "../Subtitles";
import {
  FormDeddy,
  FormContainer,
  Input,
  Area,
  SendButton,
  Span,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    number: yup.number().min(9).required(),
    subject: yup.string().required(),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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

      const result = await emailjs.send(
        "service_ecqg2zp",
        "template_3j2eao9",
        emailData,
        "sjtfv0XpePnib5IsT"
      );

      toast("😊 Formulário enviado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      reset();
    } catch (error) {
      toast("❌ Erro: formulário não enviado...", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <FormDeddy
        method="POST"
        onSubmit={handleSubmit(sendEmail)}
      >
        
          <Subtitles> Fale Comigo </Subtitles>
  
        <FormContainer>
          <div>
            <Input
              {...register("name", { required: true })}
              name="name"
              placeholder="Nome Completo"
            />
            {errors.name && <Span>Digite um nome válido</Span>}
          </div>

          <div>
            <Input
              {...register("email", { required: true })}
              name="email"
              placeholder="E-mail"
            />
            {errors.email && <Span>Digite um E-mail válido</Span>}
          </div>

          <div>
            <Input
              {...register("number", { required: true })}
              name="number"
              placeholder="Número de Telefone"
            />
            {errors.number && <Span>Digite um telefone válido</Span>}
          </div>

          <div>
            <Input
              {...register("subject", { required: true })}
              name="subject"
              placeholder="Assunto"
            />
            {errors.subject && <Span>Digite um assunto válido</Span>}
          </div>

          <div >
            <Area
              {...register("message")}
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Mensagem"
            ></Area>
            {errors.message && <Span>Digite uma mensagem válida</Span>}
          </div>
        </FormContainer>

        <SendButton style={{ width: "350px" }} type="submit">
          Enviar
        </SendButton>
      </FormDeddy>
      <ToastContainer />
    </>
  );
};

export default Form;
