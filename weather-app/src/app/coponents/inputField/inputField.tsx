import { IInputField } from "@/app/types";
import "./inputField.css";

function InputField({ type, name, title, value, handleChange }: IInputField) {
  return (
    <>
      <label htmlFor={name}>{title}:</label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={Number(value)}
        onChange={(e) => handleChange(e)}
      ></input>
    </>
  );
}

export default InputField;
