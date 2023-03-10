import "./atleta.css";

const Atleta = ({ nome, cidade, imagem }) => {
  return (
    <div className="atleta">
      <div className="cabecalho">
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <div>{cidade}</div>
      </div>
    </div>
  );
};

export default Atleta;
