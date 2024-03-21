"use client";

import CitiesContainer from "./coponents/citiesContainer/citiesContainer";
import WeatherContainer from "./coponents/weatherContainer/weatherContainer";
import { useState, useEffect } from "react";
import { ICity } from "./types";
import { cityFetch } from "./utils";

export default function Home() {
  const [cities, setCities] = useState([{} as ICity, {} as ICity]);
  const [searchCity, setSearchCity] = useState({ lat: 0, lon: 0, cityNum: 0 });

  useEffect(() => {
    cityFetch(searchCity.lat, searchCity.lon).then((data: ICity) =>
      setCities([
        ...cities.map((city, i) => (i === searchCity.cityNum ? city : data)),
      ])
    );
  }, [searchCity]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-3xl font-bold">Weather Comparison</div>
      <CitiesContainer getCity={setSearchCity} />
      <WeatherContainer cities={cities} />
    </main>
  );
}
