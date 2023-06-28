import React, { useEffect, useState } from "react";
import DueCardTask from "../components/task/DueCardTask";

import List from "../components/task/List";
import { Link, Outlet } from "react-router-dom";
import { getAllStatus } from "../utils/api";

function Task() {
  const [statusData, setStatusData] = useState({
    ALL: null,
    DONE: null,
    IN_PROGRESS: null,
    NEW: null,
  });
  useEffect(() => {
    async function getStatus() {
      const allData = await getAllStatus({ query: "ALL" });
      const newData = await getAllStatus({ query: "NEW" });
      const inproData = await getAllStatus({ query: "IN_PROGRESS" });
      const doneData = await getAllStatus({ query: "DONE" });

      if (doneData) {
        setStatusData((prev) => {
          return {
            ...prev,
            ALL: allData,
            NEW: newData,
            IN_PROGRESS: inproData,
            DONE: doneData,
          };
        });

      }
    }

    getStatus();
  }, []);
  const [clicked, setClicked] = useState(false);
  const progress = ["ALL", "NEW", "IN_PROGRESS", "DONE"];
  return (
    <div className="px-10">
      <span className="font-bold text-2xl">Task Summary</span>
      <div className="grid grid-cols-2 gap-5 p-2 m-2">
        {statusData.NEW &&
          progress.map((item) => (
            <Link key={item} to={""}>
              <DueCardTask progress={item} count={2} data={statusData} />
            </Link>
          ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Task;
