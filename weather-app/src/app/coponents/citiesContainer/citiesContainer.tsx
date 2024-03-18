"use client";
import { useAppDispatch, useAppSelector, useAppStore } from "../../lib/hooks";
import { useRef } from "react";
import CityBlock from "../cityBlock/cityBlock";

export default function CitiesContainer() {
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    // store.dispatch(initializeProduct(product))
    initialized.current = true;
  }
  const cities = useAppSelector((state) => state.cities);
  const dispatch = useAppDispatch();
  console.log(cities);
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
      <div>
        <CityBlock title="First City"></CityBlock>
      </div>
      <div>
        <CityBlock title="Second City"></CityBlock>
      </div>
    </div>
  );
}
