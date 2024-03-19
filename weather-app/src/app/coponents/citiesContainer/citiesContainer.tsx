"use client";
import { ICitiesContainer } from "@/app/types";
// import { APIKEY } from "@/app/constants";
// import { useAppDispatch, useAppSelector, useAppStore } from "../../lib/hooks";
// import { useRef } from "react";
import CityBlock from "../cityBlock/cityBlock";
// import { addCity1, citiesSlice, selectCities } from "@/app/features/citySlice";
// import { useState, useEffect } from "react";

export default function CitiesContainer({ fetchCity }: ICitiesContainer) {
  //   const store = useAppStore();
  //   const initialized = useRef(false);
  //   if (!initialized.current) {
  //     store.dispatch(citiesSlice(city))
  //     initialized.current = true;
  //   }
  //   const cities = useAppSelector((state) => state.cities);
  //   const dispatch = useAppDispatch();
  //   console.log(cities);
  // let reducer = citiesSlice;
  // let cities = selectCities();
  // const cities = useAppSelector((state) => state.cities)
  //   addCity1({name:"bubi"})
  //   console.log(cities);

  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
      <div>
        <CityBlock
          title="First City"
          cityNum={0}
          fetchCity={fetchCity}
        ></CityBlock>
      </div>
      <div>
        <CityBlock
          title="Second City"
          cityNum={1}
          fetchCity={fetchCity}
        ></CityBlock>
      </div>
    </div>
  );
}
