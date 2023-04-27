
import "./Campo.css";

const Campo = ({ titulo, comen, required, value, setValue,type="text" }) => {
  const manejarCambio = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={`campo campo-${type}`}>
      <label>{titulo}</label>
      <input
        onChange={manejarCambio}
        type={type}
        placeholder={comen}
        required={required}
        value={value}
      />
    </div>
  );
};
export default Campo;
