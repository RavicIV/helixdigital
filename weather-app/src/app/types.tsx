export interface IInputField {
  name: string;
  type: string;
  value: number;
  title: string;
  minMax: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IGetCity {
  lat: number;
  lon: number;
  cityNum: number;
}

export interface ICitiesContainer {
  getCity: ({ lat, lon, cityNum }: IGetCity) => void;
}

export interface IWeatherBlock {
  title: string;
  cityNum: number;
  city: ICity;
}

export interface ICityBlock extends ICitiesContainer {
  title: string;
  cityNum: number;
}

export interface IWeatherContainer {
  cities: ICity[];
}

export interface ICity {
  coord: {
    lon: number | undefined;
    lat: number | undefined;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    "1h"?: number;
    "3h"?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ICitiesSlice {
  city1: ICity;
  city2: ICity;
}
