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

const Formulario = () => {
  const esportes = [
    "100m rasos",
    "200m rasos",
    "400m rasos",
    "800m rasos",
    "1500m rasos",
    "5000m rasos",
    "10.000m rasos",
    "3000m com obstáculos",
    "110m com barreiras",
    "100m com barreiras",
    "Revezamento 4x100m",
    "Revezamento 4x400m",
    "Marcha atlética de 20 km",
    "Marcha atlética de 50 km",
    "Salto em altura",
    "Salto em distância",
    "Salto triplo",
    "Salto com vara",
    "Arremesso de peso",
    "Lançamento de disco",
    "Lançamento de martelo",
    "Lançamento de dardo",
    "Decatlo",
    "Heptatlo",
  ];

  const [nome, setNome] = useState("");
  const [cla, setCla] = useState("");
  const [imagem, setImagem] = useState("");
  const [esporte, setEsporte] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    console.log("Form submetido", nome, cla, imagem, esporte);
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
          label="Clã"
          placeholder="Digite seu clã"
          valor={cla}
          aoAlterado={(valor) => setCla(valor)}
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
          itens={esportes}
          valor={esporte}
          aoAlterado={(valor) => setEsporte(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </Section>
  );
};

export default Formulario;
