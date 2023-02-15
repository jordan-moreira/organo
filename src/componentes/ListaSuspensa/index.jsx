import styled from "styled-components";

const ListaContainer = styled.div`
  label {
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
  }
  select {
    background-color: #fff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
  }
`;
const ListaSuspensa = (props) => {
  return (
    <ListaContainer>
      <label>{props.label}</label>
      <select>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </ListaContainer>
  );
};

export default ListaSuspensa;
