import styled from "styled-components";

const BotaoContainer = styled.button`
  background-color: #6278f7;
  border-radius: 10px;
  font-weight: 700;
  font-size: 18px;
  padding: 32px;
  border: none;
  cursor: pointer;
  color: #fff;
  margin: 32px 0;

  &:hover {
    color: #95ffd4;
  }
`;

const Botao = (props) => {
  return <BotaoContainer>{props.children}</BotaoContainer>;
};

export default Botao;
