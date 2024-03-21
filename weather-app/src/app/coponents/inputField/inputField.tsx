import { IInputField } from "@/app/types";
import "./inputField.css";

function InputField({
  type,
  name,
  title,
  value,
  minMax,
  handleChange,
}: IInputField) {
  return (
    <div>
      <label htmlFor={name}>{title}:</label>
      <input
        type={type}
        min={minMax * -1}
        max={minMax}
        id={name}
        name={name}
        defaultValue={Number(value)}
        onChange={(e) => handleChange(e)}
      ></input>
    </div>
  );
}

export default InputField;
