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

const Esporte = ({ nome, corPrimaria, corSecundaria, atletas }) => {
  const cssContainer = { backgroundColor: corSecundaria };
  const cssH3 = { borderColor: corPrimaria };

  return atletas.length > 0 ? (
    <EsporteContainer style={cssContainer}>
      <h3 style={cssH3}>{nome}</h3>
      <div className="atletas">
        {atletas.map((infoAtleta) => {
          return (
            <Atleta
              key={infoAtleta.nome}
              corDeFundo={corPrimaria}
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
