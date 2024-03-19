"use client";
import { APIKEY } from "./constants";
import CitiesContainer from "./coponents/citiesContainer/citiesContainer";
// import StoreProvider from "./coponents/storeProvider/StoreProvider";
import WeatherContainer from "./coponents/weatherContainer/weatherContainer";
import { useState } from "react";
import { ICity } from "./types";
import { cityFetch } from "./utils";

export default function Home() {
  const [cities, setCities] = useState([{} as ICity, {} as ICity]);

  const fetchCity = function (lat: number, lon: number, cityNum: number) {
    let newCity = cityFetch(lat, lon) as ICity;
    setCities([
      ...cities.map((city, i) => (i === cityNum ? city : newCity)),
    ]);
  };

  return (
    // <StoreProvider>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CitiesContainer fetchCity={fetchCity} />
      <WeatherContainer cities={cities} />
    </main>
    // </StoreProvider>
  );
}
