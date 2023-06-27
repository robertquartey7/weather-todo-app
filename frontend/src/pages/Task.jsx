import React, { useState } from "react";
import DueCardTask from "../components/task/DueCardTask";

import List from "../components/task/List";
import { Outlet } from "react-router-dom";

function Task() {
  const [clicked, setClicked] = useState(false);
  const progress = ["All", "New", "In-Progress", "Done"];
  return (
    <div className="px-10">
      <span className="font-bold text-2xl">Task Summary</span>
      <div className="grid grid-cols-2 gap-5 p-2 m-2">
        {progress.map((item) => (
          <DueCardTask key={item} progress={item} count={2} />
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Task;
