import "./App.css";
import { v4 as uuid } from "uuid";
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipos";
import Footer from "./components/Footer";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [mostrarFormulario, actualizar] = useState(false);
  const [colaboradores, setColabrador] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav:true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav:true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav:false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav:true
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav:false
    },
  ]);
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorP: "#57C278",
      colorS: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorP: "#82CFFA",
      colorS: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorP: "#A6D157",
      colorS: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorP: "#E06B69",
      colorS: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorP: "#DB6EBF",
      colorS: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorP: "#FFBA05",
      colorS: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorP: "#FF8A29",
      colorS: "#FFEEDF",
    },
  ]);
  const cambiarMostrar = () => {
    actualizar(!mostrarFormulario);
  };
  const registrarColaborador = (colaborador) => {
    setColabrador([...colaboradores, colaborador]);
    console.log(colaboradores);
  };
  const eliminarColaborador = (id) => setColabrador(colaboradores.filter(e=>e.id!==id))
  const setColor = (color, id) => {
    setEquipos(
      equipos.map((e) => {
        if (e.id === id) {
          e.colorP = color;
        }
        return e;
      })
    );
  };
  const like=(id)=>{
    setColabrador(colaboradores.map((e)=>{
      if(e.id===id){
        e.fav=!e.fav
      }
      return e
    }))
  }

  const crearEquipo=(nuevoe)=>{
    setEquipos([...equipos,{...nuevoe, id:uuid()}])
  }
  return (
    <div className="App">
      <Header />
      {mostrarFormulario === true ? (
        <Formulario
          equipos={equipos.map((e) => e.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      ) : (
        <></>
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((e, index) => {
        return (
          <Equipo
            equipos={e.titulo}
            colorP={e.colorP}
            colorS={e.colorS}
            id={e.id}
            key={index}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.equipo === e.titulo
            )}
            eliminarColaborador={eliminarColaborador}
            setColor={setColor}
            like={like}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
