import { useEffect, useState } from "react";
import { getCurrentWeatherInfo, weatherIconUrl } from "../../utils/api";
import { useSelector } from "react-redux";
function Weathercard() {
  const [weatherdata, setWeatherdata] = useState(null);
  const userLocation = useSelector((state) => state.userLocation);
  async function currentLocation() {
    const data = await getCurrentWeatherInfo({
      lat: userLocation?.lat,
      lng: userLocation?.lng,
    });
    setWeatherdata(data.data);
  }
  useEffect(() => {
    currentLocation();
  }, [userLocation.setLocate == true]);

  if (weatherdata) {
    const date = new Date();

    return (
      <div className="w-full rounded overflow-hidden shadow-lg flex justify-between px-5 md:px-20 mix-blend-multiply ">
        <div className="flex flex-col gap-2">
          <div>
            <img src={weatherIconUrl(weatherdata.weather[0].icon)} alt="" />
            <span>{weatherdata.weather[0].description}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span>Today</span>
            <span className="text-gray-500">
              {weatherdata?.main.temp} &deg;F
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 p-2">
          <div className="flex flex-col  p-2 justify-center items-center">
            <span>{weatherdata.main.temp_max}</span>
            <span>High</span>
          </div>

          <div className="flex flex-col  p-2 justify-center items-center">
            <span>{weatherdata.rain?.["1h"] || "0%"}</span>
            <span>Rain</span>
          </div>
          <div className="flex flex-col  p-2 justify-center items-center">
            <span>{date.toLocaleTimeString(weatherdata.sys.sunrise)}</span>
            <span>Sunrise</span>
          </div>
          <div className="flex flex-col  p-2 justify-center items-center">
            <span>{weatherdata.main.temp_min}</span>
            <span>Low</span>
          </div>

          <div className="flex flex-col  p-2 justify-center items-center">
            <span>{weatherdata.wind.speed}</span>
            <span>Wind</span>
          </div>
          <div className="flex flex-col  p-2 justify-center items-center">
            <span>{date.toLocaleTimeString(weatherdata.sys.sunset)}</span>
            <span>Sunset</span>
          </div>
        </div>
      </div>
    );
  }
  return <div>null</div>;
}

export default Weathercard;
