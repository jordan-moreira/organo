import styled from "styled-components";
import Atleta from "../Atleta";

const EsporteContainer = styled.section`
  text-align: center;
  padding: 32px;

  h3 {
    font-size: 32px;
    border-bottom: 4px solid;
    display: inline-block;
    padding-bottom: 8px;
  }
  .atletas {
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
  }
`;

const Esporte = ({ key, nome, corSublinhado, corDeFundo, atletas }) => {
  const cssContainer = { backgroundColor: corDeFundo };
  const cssH3 = { borderColor: corSublinhado };
  console.log("o que tem dentro", atletas);

  return atletas.length > 0 ? (
    <EsporteContainer style={cssContainer} key={key}>
      <h3 style={cssH3}>{nome}</h3>
      <div className="atletas">
        {atletas.map((infoAtleta) => {
          return (
            <Atleta
              nome={infoAtleta.nome}
              cidade={infoAtleta.cidade}
              imagem={infoAtleta.imagem}
              esporte={infoAtleta.esporte}
            />
          );
        })}
      </div>
    </EsporteContainer>
  ) : (
    ""
  );
};

export default Esporte;

// atletas.map((infoAtleta) => (
//   <Atleta
//
//   />
