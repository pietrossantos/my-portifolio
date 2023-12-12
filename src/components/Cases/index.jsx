import React from "react";
import {
  BoxCases,
  CostumizeCases,
  SectionCase,
  DescriptionCase,
  LinkExternal,
  Logos,
} from "./style";
import Text from "../../components/Text";
const Cases = () => {
  return (
    <>
      <BoxCases>
        <SectionCase>
          <a href="https://calculator-p.vercel.app/" target="_blank">
            <CostumizeCases
              src="../../../src/assets/img/mobile (3).png"
              alt="imagem ilustrativa"
            />
          </a>
          <DescriptionCase>
            <Text>
              Aplicativo de calculadora com os atributos de adição, subtração,
              divisão, multiplicação e porcentagem, tentei replicar a
              calculadora mobile, com todas as funcionalidades necessárias,
              coloquei um fundo característico referente a Matemática, para mais
              informações clique na logo do GitHub para ver o código do projeto
              ou na logo de link para ver o site.
            </Text>
            <Logos>
              <img
                src="../../../src/assets/img/GitHub.svg"
                alt="imagem ilustrativa"
              />
              <a href="https://calculator-p.vercel.app/" target="_blank">
                <LinkExternal />
              </a>
            </Logos>
          </DescriptionCase>
        </SectionCase>
      </BoxCases>

      <BoxCases>
        <SectionCase>
          <a href="https://khrisdecora.com.br/" target="_blank">
            <CostumizeCases
              src="../../../src/assets/img/mobile (4).png"
              alt="imagem ilustrativa"
            />
          </a>
          <DescriptionCase>
            <Text>
              Um dos projetos que eu fiz na Web Social (Empresa de tecnologia
              especializada na criação de páginas), fui responsável por fazer o
              formulário e uma seção da página descritiva falando sobre a Khris
              Herreiro, foi um trabalho ao qual eu tenho orgulho de ter
              concluido juntamente com a equipe da Web Social, foi um projeto
              desafiador, mas que aumento muito meus conhecimentos, para mais
              informações clique na logo do GitHub para ver o código do projeto
              ou na logo de link para ver o site.
            </Text>
            <Logos>
              <img
                src="../../../src/assets/img/GitHub.svg"
                alt="imagem ilustrativa"
              />
              <a href="https://khrisdecora.com.br/" target="_blank">
                <LinkExternal />
              </a>
            </Logos>
          </DescriptionCase>
        </SectionCase>
      </BoxCases>

      <BoxCases>
        <SectionCase>
          <a href="https://robertarocha.netlify.app/" target="_blank">
            <CostumizeCases
              src="../../../src/assets/img/mobile (5).png"
              alt="imagem ilustrativa"
            />
          </a>
          <DescriptionCase>
            <Text>
              Um trabalho também feito dentro da Web Social, fui responsável por
              algumas seções da página, aonde já aplicamos novas tecnologias no
              projeto, novos conceitos e melhores formas de organizar o código,
              para mais informações clique na logo do GitHub para ver o código
              do projeto ou na logo de link para ver o site.
            </Text>
            <Logos>
              <img
                src="../../../src/assets/img/GitHub.svg"
                alt="imagem ilustrativa"
              />
              <a href="https://robertarocha.netlify.app/" target="_blank">
                <LinkExternal />
              </a>
            </Logos>
          </DescriptionCase>
        </SectionCase>
      </BoxCases>

      <BoxCases>
        <SectionCase>
          <a href="https://my-portifolio-drab.vercel.app/" target="_blank">
            <CostumizeCases
              src="../../../src/assets/img/mobile (1).png"
              alt="imagem ilustrativa"
            />
          </a>
          <DescriptionCase>
            <Text>
              Meu portifolio profissional, um dos projetos mais importantes de
              qualquer programador, depois de muito trabalho consegui completar
              esse desafio, nesse projeto utilizei tecnologias como: React,
              Styled-Components, JavaScript, Yup, React-icons..., organizei meu
              código da melhor forma possivel com as pastas, tudo no seu devido
              lugar, presando sempre pela semântica, para mais informações
              clique na logo do GitHub para ver o código do projeto ou na logo
              de link para ver o site.
            </Text>

            <Logos>
              <img
                src="../../../src/assets/img/GitHub.svg"
                alt="imagem ilustrativa"
              />
              <a href="https://my-portifolio-drab.vercel.app/" target="_blank">
                <LinkExternal />
              </a>
            </Logos>
          </DescriptionCase>
        </SectionCase>
      </BoxCases>
    </>
  );
};

export default Cases;
