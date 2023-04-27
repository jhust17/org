import "./Equipos.css";
import Colaborador from "../Colaborador/";
import hexToRgba from "hex-to-rgba";

const Equipo = ({
  id,
  equipos,
  colorP,
  colorS,
  like,
  colaboradores,
  eliminarColaborador,
  setColor,
}) => {
  const color=hexToRgba(colorP,0.6)
  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={{ backgroundColor: color }}>
          <input
            type="color"
            className="input-color"
            value={colorP}
            onChange={(e) => {
              setColor(e.target.value, id);
            }}
          />
          <h3 style={{ borderColor: colorP }}>{equipos}</h3>
          <div className="colaboradores">
            {colaboradores.map((e, index) => (
              <Colaborador
                datos={e}
                key={index}
                colorP={colorP}
                deleteC={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
