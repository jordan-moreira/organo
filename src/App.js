import { useState } from "react";
import Banner from "./componentes/Banner";
import Esporte from "./componentes/Esporte";
import Formulario from "./componentes/Formulario";

function App() {
  const esportesLista = [
    {
      nome: "100m rasos",
      corSublinhado: "#FF0000",
      corDeFundo: "#FF9999",
    },
    {
      nome: "200m rasos",
      corSublinhado: "#FFA500",
      corDeFundo: "#ffb253",
    },
    {
      nome: "400m rasos",
      corSublinhado: "#FFFF00",
      corDeFundo: "#FFFFCC",
    },
    {
      nome: "800m rasos",
      corSublinhado: "#008000",
      corDeFundo: "#BDFCC9",
    },
    {
      nome: "1500m rasos",
      corSublinhado: "#00FF7F",
      corDeFundo: "#D8FFDA",
    },
    {
      nome: "5000m rasos",
      corSublinhado: "#006400",
      corDeFundo: "#B3DAB3",
    },
    {
      nome: "10.000m rasos",
      corSublinhado: "#008080",
      corDeFundo: "#B3FFFF",
    },
    {
      nome: "3000m com obstáculos",
      corSublinhado: "#000082",
      corDeFundo: "#B3B4FF",
    },
    {
      nome: "110m com barreiras",
      corSublinhado: "#800083",
      corDeFundo: "#E6B4E8",
    },
    {
      nome: "100m com barreiras",
      corSublinhado: "#4B0084",
      corDeFundo: "#CC89FF",
    },
    {
      nome: "Revezamento 4x100m",
      corSublinhado: "#FFC0CB",
      corDeFundo: "#FFE6EA",
    },
    {
      nome: "Revezamento 4x400m",
      corSublinhado: "#FF69B4",
      corDeFundo: "#FFD6E5",
    },
    {
      nome: "Marcha atlética de 20 km",
      corSublinhado: "#FFD700",
      corDeFundo: "#FFF8DC",
    },
    {
      nome: "Marcha atlética de 50 km",
      corSublinhado: "#FFA07A",
      corDeFundo: "#FFE4E1",
    },
    {
      nome: "Salto em altura",
      corSublinhado: "#800003",
      corDeFundo: "#CC9999",
    },
    {
      nome: "Salto em distância",
      corSublinhado: "#FF8C00",
      corDeFundo: "#ffb252",
    },
    {
      nome: "Salto triplo",
      corSublinhado: "#483D8B",
      corDeFundo: "#B0A9CF",
    },
    {
      nome: "Salto com vara",
      corSublinhado: "#9400D5",
      corDeFundo: "#E6E8FA",
    },
    {
      nome: "Arremesso de peso",
      corSublinhado: "#008001",
      corDeFundo: "#BDFCC9",
    },
    {
      nome: "Lançamento de disco",
      corSublinhado: "#000082",
      corDeFundo: "#4",
    },
    {
      nome: "Lançamento de martelo",
      corSublinhado: "#800083",
      corDeFundo: "#E6B4E8",
    },
    {
      nome: "Lançamento de dardo",
      corSublinhado: "#4B0084",
      corDeFundo: "#CC89FF",
    },
    {
      nome: "Decatlo",
      corSublinhado: "#800003",
      corDeFundo: "#CC9999",
    },
    {
      nome: "Heptatlo",
      corSublinhado: "#9400D5",
      corDeFundo: "#E6E8FA",
    },
  ];
  const [atletas, setAtleta] = useState([]);

  const aoNovoAtletaAdicionado = (infoAtleta) => {
    console.log(infoAtleta);
    setAtleta([...atletas, infoAtleta]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        esportes={esportesLista.map((esporte) => esporte.nome)}
        aoAtletaCadastrado={(infoAtleta) => aoNovoAtletaAdicionado(infoAtleta)}
      />
      {esportesLista.map((esporte) => {
        console.log(esporte);
        return (
          <Esporte
            key={esporte.nome}
            nome={esporte.nome}
            corSublinhado={esporte.corSublinhado}
            corDeFundo={esporte.corDeFundo}
            atletas={atletas.filter(
              (atleta) => atleta.esporte === esporte.nome
            )}
          />
        );
      })}
      {console.log("tipo", typeof atletas)}
    </div>
  );
}

export default App;
