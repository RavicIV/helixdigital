"use client";
import { IWeatherBlock } from "@/app/types";

function WeatherBlock({ title, cityNum, city }: IWeatherBlock) {
  let classes = city.weather.map((weather) => weather.main).join(" ");

  return (
    <div className={`${classes} HDcontainer`} style={{
      backgroundColor: `rgba(239, 71, 111, ${city.clouds.all/100})`
    }}>
      {/* <div>
        {title} {cityNum}
      </div> */}
      <div className="text-2xl font-bold">
        {city.name ? city.name : "City not found"}
        {city.weather.map((weather, i) => (
          <img
            key={i}
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt=""
          ></img>
        ))}
      </div>
      <div>Temperature: {city.main.temp}°C</div>
      <div>Feels Like: {city.main.feels_like}°C</div>
      <div>Humidity: {city.main.humidity}%</div>
      <div>
        Wind: {city.wind.speed} km/h {city.wind.deg}°
      </div>
      {city.weather.map((weather, i) => (
        <div key={i}>
          Weather: {weather.main} - {weather.description}
        </div>
      ))}
    </div>
  );
}

export default WeatherBlock;
