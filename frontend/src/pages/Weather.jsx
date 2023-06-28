import React, { useEffect, useState } from "react";
import Weathercard from "../components/weather/weathercard";
import WeatherSearch from "../components/weatherComp/WeatherSearch";
import WeeklyWeather from "../components/weather/WeeklyWeather";
import { useSelector } from "react-redux";
import { getWeeklyWeatherInfo } from "../utils/api";
import DailyWeather from "../components/weather/DailyWeather";

function Weather() {
  // const [weatherdata, setWeatherdata] = useState(null);
  const [dailyWeatherData, setDailyWeatherData] = useState(null);
  const [hourWeatherData, setHourWeatherData] = useState();
  const { setLocate, lng, lat } = useSelector((state) => state.userLocation);

  async function getData() {
    const data = await getWeeklyWeatherInfo({ lat, lng });
    if (data) {
      setDailyWeatherData(data?.data.daily);
      setHourWeatherData(data?.data.hourly);
     
    }
  }

  useEffect(() => {
    getData();
  }, [setLocate == true]);
  return (
    <div className="px-10">
      <div className="mb-10 w-full  ">
        <WeatherSearch />
      </div>
      <div className="shadow-2xl rounded-3xl overflow-hidden mt-5  ">
        <Weathercard />
      </div>
      <div className="md:px-10 px-5  flex flex-col gap-5 mt-5 shadow-lg">
        <div className=" flex flex-col">
          <span className="pb-10 font-bold text-3xl mt-5">Today </span>
          <div>
            {hourWeatherData && (
              <DailyWeather dailyWeatherData={hourWeatherData} />
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="pb-10 font-bold text-3xl my-5 py-5">Weekly Weather Forecast</span>
          <div>
            {dailyWeatherData && (
              <WeeklyWeather weeklyWeatherData={dailyWeatherData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
