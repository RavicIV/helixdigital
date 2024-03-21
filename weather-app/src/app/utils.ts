import { APIKEY } from "./constants";
import { ICity } from "./types";

export const cityFetch = async function (
  lat: number,
  lon: number
): Promise<ICity> {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};
