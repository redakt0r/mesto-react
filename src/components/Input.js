import "../index.css";

function Input({ name, placeholder, type }) {
  return (
    <>
      <input
        className={`popup__input popup__input_name_${name}`}
        name={name}
        placeholder={placeholder}
        type={type}
        required
      />
      <span className={`popup__input-error popup__input-error_type_${name}`} />
    </>
  );
}
export default Input;
