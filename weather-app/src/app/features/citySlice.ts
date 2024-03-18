import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICitiesSlice, ICity } from "../types";
import { initialCity } from "../constants";
import { RootState } from "../lib/store";

// Define a type for the slice state

// Define the initial state using that type
const initialState: ICitiesSlice = {
  city1: initialCity,
  city2: initialCity,
};

export const citiesSlice = createSlice({
  name: "cities",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCity1: (state, action: PayloadAction<ICity>) => {
      state.city1 = action.payload;
    },
    addCity2: (state, action: PayloadAction<ICity>) => {
      state.city2 = action.payload;
    },
  },
});

export const { addCity1, addCity2 } = citiesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCities = (state: RootState) => state.cities;

export default citiesSlice.reducer;
