import { useState } from "react";
import Banner from "./componentes/Banner";
import Esporte from "./componentes/Esporte";
import Formulario from "./componentes/Formulario";

function App() {
  const esportesLista = [
    {
      nome: "100m rasos",
      corPrimaria: "#FF0000",
      corSecundaria: "#FF9999",
    },
    {
      nome: "200m rasos",
      corPrimaria: "#FFA500",
      corSecundaria: "#ffb253",
    },
    {
      nome: "400m rasos",
      corPrimaria: "#FFFF00",
      corSecundaria: "#FFFFCC",
    },
    {
      nome: "800m rasos",
      corPrimaria: "#008000",
      corSecundaria: "#BDFCC9",
    },
    {
      nome: "1500m rasos",
      corPrimaria: "#00FF7F",
      corSecundaria: "#D8FFDA",
    },
    {
      nome: "5000m rasos",
      corPrimaria: "#006400",
      corSecundaria: "#B3DAB3",
    },
    {
      nome: "10.000m rasos",
      corPrimaria: "#008080",
      corSecundaria: "#B3FFFF",
    },
    {
      nome: "3000m com obstáculos",
      corPrimaria: "#000082",
      corSecundaria: "#B3B4FF",
    },
    {
      nome: "110m com barreiras",
      corPrimaria: "#800083",
      corSecundaria: "#E6B4E8",
    },
    {
      nome: "100m com barreiras",
      corPrimaria: "#4B0084",
      corSecundaria: "#CC89FF",
    },
    {
      nome: "Revezamento 4x100m",
      corPrimaria: "#FFC0CB",
      corSecundaria: "#FFE6EA",
    },
    {
      nome: "Revezamento 4x400m",
      corPrimaria: "#FF69B4",
      corSecundaria: "#FFD6E5",
    },
    {
      nome: "Marcha atlética de 20 km",
      corPrimaria: "#FFD700",
      corSecundaria: "#FFF8DC",
    },
    {
      nome: "Marcha atlética de 50 km",
      corPrimaria: "#FFA07A",
      corSecundaria: "#FFE4E1",
    },
    {
      nome: "Salto em altura",
      corPrimaria: "#800003",
      corSecundaria: "#CC9999",
    },
    {
      nome: "Salto em distância",
      corPrimaria: "#FF8C00",
      corSecundaria: "#ffb252",
    },
    {
      nome: "Salto triplo",
      corPrimaria: "#483D8B",
      corSecundaria: "#B0A9CF",
    },
    {
      nome: "Salto com vara",
      corPrimaria: "#9400D5",
      corSecundaria: "#E6E8FA",
    },
    {
      nome: "Arremesso de peso",
      corPrimaria: "#008001",
      corSecundaria: "#BDFCC9",
    },
    {
      nome: "Lançamento de disco",
      corPrimaria: "#000082",
      corSecundaria: "#4",
    },
    {
      nome: "Lançamento de martelo",
      corPrimaria: "#800083",
      corSecundaria: "#E6B4E8",
    },
    {
      nome: "Lançamento de dardo",
      corPrimaria: "#4B0084",
      corSecundaria: "#CC89FF",
    },
    {
      nome: "Decatlo",
      corPrimaria: "#800003",
      corSecundaria: "#CC9999",
    },
    {
      nome: "Heptatlo",
      corPrimaria: "#9400D5",
      corSecundaria: "#E6E8FA",
    },
  ];
  const [atletas, setAtleta] = useState([]);

  const aoNovoAtletaAdicionado = (infoAtleta) => {
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
        return (
          <Esporte
            key={esporte.nome}
            nome={esporte.nome}
            corPrimaria={esporte.corPrimaria}
            corSecundaria={esporte.corSecundaria}
            atletas={atletas.filter(
              (atleta) => atleta.esporte === esporte.nome
            )}
          />
        );
      })}
    </div>
  );
}

export default App;
