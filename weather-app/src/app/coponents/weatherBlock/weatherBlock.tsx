"use client";
import { IWeatherBlock } from "@/app/types";
import InputField from "../inputField/inputField";
import { useState } from "react";

function WeatherBlock({ title, cityNum, city }: IWeatherBlock) {

  return (
    <div>
      <div>{title} {cityNum}</div>
      <div>{city.name}</div>
      <div>Temperature: {city.main.temp}°C</div>  
      <div>Humidity: {city.main.humidity}%</div> 
      <div>Wind: {city.wind.speed} km/h</div>
      <div></div>

    </div>
  );
}

export default WeatherBlock;
