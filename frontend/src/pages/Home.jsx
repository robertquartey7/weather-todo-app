import React from "react";
import Title from "../components/Title";
import Task from "../components/todos/Task";
import Weathercard from "../components/weather/weathercard";

function Home() {
  return (
    <div>
      <div className="">
        {/* weather */}
        <div>
          <Title title={"Weather Forecast"} link={"/weather"} />
          {/* weather deatils */}
          <div className="px-10"><Weathercard /></div>
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
