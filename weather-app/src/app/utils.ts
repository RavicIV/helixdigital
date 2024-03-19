import { ICity } from "./types";

export const cityFetch = function (lat: number, lon: number): ICity | void {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};
