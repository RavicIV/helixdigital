"use client";
import { ICityBlock } from "@/app/types";
import InputField from "../inputField/inputField";
import { useState } from "react";

function CityBlock({ title, cityNum, fetchCity }: ICityBlock) {
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lon: 0,
  });

  const setCoords = function (e: React.ChangeEvent<HTMLInputElement>) {
    setCoordinates({
      ...coordinates,
      [e.target.name]: Number(e.target.value),
    });
  };

  return (
    <div>
      <div>{title}</div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <InputField
          name="lat"
          type="number"
          title="Lattitude"
          value={Number(coordinates.lat)}
          handleChange={setCoords}
        />
        <InputField
          name="lon"
          type="number"
          title="Longitude"
          value={Number(coordinates.lon)}
          handleChange={setCoords}
        />
      </div>
      <button
        onClick={() => fetchCity(coordinates.lat, coordinates.lon, cityNum)}
      >
        Search City
      </button>

      {}
    </div>
  );
}

export default CityBlock;
