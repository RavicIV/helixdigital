"use client";
import CitiesContainer from "./coponents/citiesContainer/citiesContainer";
import StoreProvider from "./coponents/storeProvider/StoreProvider";

export default function Home() {
  return (
    <StoreProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CitiesContainer />
      </main>
    </StoreProvider>
  );
}
