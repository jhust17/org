import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador = ({ datos, colorP, deleteC, like }) => {
  const { foto, puesto, nombre, id, fav } = datos;
  return (
    <div className="colaborador">
      <AiFillCloseCircle onClick={() => deleteC(id)} className="eliminar" />
      <div className="encabezado" style={{ backgroundColor: colorP }}>
        <img src={foto} alt="encabezado img" />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav === true ? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default Colaborador;
