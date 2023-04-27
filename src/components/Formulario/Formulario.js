import "./Formulario.css";
import Campo from "../Campo/Campo";
import Listaopciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";
const Formulario = ({equipos,registrarColaborador,crearEquipo}) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo,setEquipo]=useState("");
  const [titulo,setTitulo]=useState("");
  const [color,setColor]=useState("");
  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosenviar={
      nombre,
      puesto,
      foto,
      equipo
    }
    registrarColaborador(datosenviar)
  };
  const manejarNuevoEquipo=(e)=>{
    e.preventDefault()
    crearEquipo({titulo,colorP:color})
  }
  return (
    <section className="formulario">
      <form action="" onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          comen="Ingresar nombre"
          required={true}
          value={nombre}
          setValue={setNombre}
        ></Campo>
        <Campo
          titulo="Puesto"
          comen="Ingersar puesto"
          required={false}
          value={puesto}
          setValue={setPuesto}
        ></Campo>
        <Campo
          titulo="Foto"
          comen="Ingresar enlace de foto"
          required={true}
          value={foto}
          setValue={setFoto}
        ></Campo>
        <Listaopciones value={equipo} setEquipo={setEquipo} equipos={equipos}></Listaopciones>
        <Boton texto="Crear"></Boton>
      </form>
      <form action="" onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo</h2>
        <Campo
          titulo="Titulo"
          comen="Ingresar titulo"
          required={true}
          value={titulo}
          setValue={setTitulo}
        ></Campo>
        <Campo
          titulo="Color"
          comen="Ingersar color en Hex"
          required={true}
          value={color}
          setValue={setColor}
          type="color"
        ></Campo>
        <Boton texto="Registrar Equipo"></Boton>
        </form>
    </section>
  );
};
export default Formulario;
