import { useState } from "react";
import styled from "styled-components";

import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 80px 0;

  form {
    max-width: 80%;
    background-color: #f2f2f2;
    border-radius: 20px;
    padding: 36px 64px;
    box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
  }
`;

const Formulario = (props) => {
  const esportes = props.esportes;

  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [imagem, setImagem] = useState("");
  const [esporte, setEsporte] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoAtletaCadastrado({
      nome,
      cidade,
      imagem,
      esporte,
    });
    setNome("");
    setCidade("");
    setImagem("");
    setEsporte("");
  };

  return (
    <Section>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do atleta</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="Cidade"
          placeholder="Digite o nome da sua cidade"
          valor={cidade}
          aoAlterado={(valor) => setCidade(valor)}
        />

        <CampoTexto
          label="Imagem"
          placeholder="Cole o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Esporte"
          esportes={esportes}
          valor={esporte}
          aoAlterado={(valor) => setEsporte(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </Section>
  );
};

export default Formulario;
