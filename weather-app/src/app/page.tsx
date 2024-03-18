"use client";
import { APIKEY } from "./constants";
import CitiesContainer from "./coponents/citiesContainer/citiesContainer";
// import StoreProvider from "./coponents/storeProvider/StoreProvider";
import WeatherContainer from "./coponents/weatherContainer/weatherContainer";
import { useState, useEffect } from "react";

export default function Home() {
  const [cities, setCities] = useState([{}, {}]);

  const fetchCity = function(lat:number,lon:number,cityNum:number) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCities([
            ...cities.map((city,i)=>i===cityNum ? city : data)
        ]);
      });
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
