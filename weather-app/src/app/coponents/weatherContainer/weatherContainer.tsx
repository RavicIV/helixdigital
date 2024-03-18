"use client";

import { ICity } from "@/app/types";
import WeatherBlock from "../weatherBlock/weatherBlock";

export default function WeatherContainer({cities}: ICity[]) {
    console.log(cities)
    return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
      <div>
        {cities[0].name ? <WeatherBlock title="First City" cityNum={0} city={cities[0]} ></WeatherBlock> : null }
      </div>
      <div>
      {cities[1].name ? <WeatherBlock title="Second City" cityNum={1} city={cities[1]} ></WeatherBlock> : null }
      </div>
    </div>
  );
}
