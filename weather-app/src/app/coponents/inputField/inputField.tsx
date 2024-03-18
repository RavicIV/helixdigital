import { IInputField } from "@/app/types";

function InputField({type, name, title}:IInputField) {
    return (
        <>
        <label for={name}>{title}:</label>
        <input type={type} id={name} name={name}></input>
        </>
    );
  }
  
  export default InputField;
  