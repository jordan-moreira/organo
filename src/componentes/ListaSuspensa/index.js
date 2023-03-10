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

      <select
        onChange={(event) => props.aoAlterado(event.target.value)}
        required={props.obrigatorio}
        valor={props.valor}
      >
        <option key="vazia">Selecione um esporte</option>
        {props.esportes.map((esporteNome) => (
          <option key={esporteNome}>{esporteNome}</option>
        ))}
      </select>
    </ListaContainer>
  );
};

export default ListaSuspensa;
