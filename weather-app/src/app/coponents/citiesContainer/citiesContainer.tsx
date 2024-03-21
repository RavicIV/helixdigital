"use client";
import { ICitiesContainer } from "@/app/types";
import CityBlock from "../cityBlock/cityBlock";

export default function CitiesContainer({ getCity }: ICitiesContainer) {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
      <div>
        <CityBlock title="First City" cityNum={0} getCity={getCity}></CityBlock>
      </div>
      <div>
        <CityBlock
          title="Second City"
          cityNum={1}
          getCity={getCity}
        ></CityBlock>
      </div>
    </div>
  );
}
