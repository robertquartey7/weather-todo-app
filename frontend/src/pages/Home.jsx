import React from "react";
import Title from "../components/Title";
import Task from "../components/todos/Task";
import WeatherCard from "../components/weather/WeatherCard";

function Home() {
  return (
    <div>
      <div className="">
        {/* weather */}
        <div>
          <Title title={"Weather Forecast"} link={"/weather"} />
          {/* weather deatils */}
          <div className="px-10">
            <WeatherCard />
          </div>
        </div>
      </div>
      <div>
        <Title title={"Current Task"} link={"/task"} />
        <div className="px-10">
          <Task />
        </div>
      </div>
    </div>
  );
}

export default Home;
