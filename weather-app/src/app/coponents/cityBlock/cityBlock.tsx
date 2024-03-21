"use client";
import { ICityBlock } from "@/app/types";
import InputField from "../inputField/inputField";
import { useState } from "react";

// import "./cityBlock.css";

function CityBlock({ title, cityNum, getCity }: ICityBlock) {
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
    <div className="HDcontainer">
      <div className="text-2xl font-bold">{title}</div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <InputField
          name="lat"
          type="number"
          title="Lattitude"
          minMax={90}
          value={Number(coordinates.lat)}
          handleChange={setCoords}
        />
        <InputField
          name="lon"
          type="number"
          title="Longitude"
          minMax={180}
          value={Number(coordinates.lon)}
          handleChange={setCoords}
        />
      </div>
      <button
        onClick={() => getCity({lat: coordinates.lat, lon:coordinates.lon, cityNum})}
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Search City
      </button>

      {}
    </div>
  );
}

export default CityBlock;
