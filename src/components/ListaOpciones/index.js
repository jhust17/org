import "./ListaOpciones.css";
const ListaOpciones = ({ value, setEquipo,equipos }) => {
  const manejarCambio = (e) => {
    setEquipo(e.target.value);
  };
  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={value} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar Equipo
        </option>
        {equipos.map((e, index) => (
          <option key={index}>{e}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
