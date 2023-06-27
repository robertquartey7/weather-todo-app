import React from "react";
import { weatherIconUrl } from "../../utils/api";

function DailyWeather({ dailyWeatherData }) {

  return (
    <div>
      <div className="">
        <div className="overflow-x-auto  gap-3 flex ">
          {dailyWeatherData.map((forecast) => (
            <div
              key={forecast.dt}
              className="flex flex-col  p-4 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 items-center justify-center rounded-lg"
            >
              <p>
                {new Date(forecast.dt * 1000).toLocaleString(undefined, {
                  hour: "2-digit",
                })}
              </p>
              <div>
                <img src={weatherIconUrl(forecast.weather[0].icon)} alt="" />
              </div>
              <p>{forecast.temp} °F</p>
              {/* <p>{forecast.weather[0].description}</p> */}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DailyWeather;
