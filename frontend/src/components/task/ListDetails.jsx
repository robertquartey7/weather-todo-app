import { useEffect, useState } from "react";
import Todo from "./Todo";
import { Link, useParams } from "react-router-dom";
import { getAlltask } from "../../utils/api";
function ListDetails() {
  const [taskData, setTaskData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getTask() {
      const { data } = await getAlltask({ id });
      if (data) {
        setTaskData(data.data);
        console.log(data.data);
      }
    }
    getTask();
  }, []);

  return (
    <div>
      <div>
        <div className="flex flex-col">
          <span className="font-bold text-2xl">
    
            {taskData && taskData[0]?.title}'s Task
          </span>
          {/* <span>date</span> */}
        </div>

        {/* <span>
          <CheckCircleIcon />
        </span> */}
      </div>

      <div className=" w-full md:grid md:grid-cols-3 gap-1 p-1 mt-5">
        <Link>
          <Todo />
        </Link>
        <Link>
          <Todo />
        </Link>
        <Link>
          <Todo />
        </Link>
        <Link>
          <Todo />
        </Link>
      </div>
    </div>
  );
}

export default ListDetails;
