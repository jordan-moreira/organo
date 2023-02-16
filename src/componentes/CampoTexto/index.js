import { useState } from "react";
import styled from "styled-components";

const CampoTextoConteiner = styled.div`
  margin: 24px 0;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
  }
  input {
    background-color: #fff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
  }
`;

const CampoTexto = (props) => {
  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <CampoTextoConteiner>
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </CampoTextoConteiner>
  );
};

export default CampoTexto;
