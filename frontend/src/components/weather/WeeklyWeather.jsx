import { useSelector } from "react-redux";
import { getWeeklyWeatherInfo, weatherIconUrl } from "../../utils/api";
import { useEffect, useState } from "react";

function WeeklyWeather({ weeklyWeatherData }) {
  if (weeklyWeatherData) {
    return (
      <div>
        <div className="">
          <div className="">
            {weeklyWeatherData.map((forecast) => (
              <div key={forecast.dt} className="grid grid-cols-4 ">
                <p className="font-medium">
                  {new Date(forecast.dt * 1000).toLocaleDateString(undefined, {
                    weekday: "long",
                  })}
                </p>
                <div>
                  <img src={weatherIconUrl(forecast.weather[0].icon)} alt="" />
                </div>
                <p> {forecast.temp.day} °F</p>
                <p> {forecast.weather[0].description}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default WeeklyWeather;
