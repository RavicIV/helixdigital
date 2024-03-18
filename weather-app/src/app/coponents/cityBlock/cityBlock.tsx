import { ICityBlock } from "@/app/types";
import InputField from "../inputField/inputField";

function CityBlock({title}: ICityBlock) {
    return (
      <div id="Cover" className={"'"}>
        <div>{title}</div>
        <InputField name="lat" type="number" />
        <InputField name="lon" type="number" />
        <button>Search City</button>
      </div>
    );
  }
  
  export default CityBlock;
  