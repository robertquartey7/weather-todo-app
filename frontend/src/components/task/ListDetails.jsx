import { useEffect, useState } from "react";
import Todo from "./Todo";
import { Link, useParams } from "react-router-dom";
import { getAlltask } from "../../utils/api";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Modal from "../Model";
import { createTask } from "../../utils/api";
function ListDetails() {
  const [taskData, setTaskData] = useState(null);
  const { id } = useParams();
  const [clicked, setClicked] = useState(false);


  useEffect(() => {
    async function getTask() {
      const { data } = await getAlltask({ id });
      if (data) {
        setTaskData(data.data[0]);
      
      }
    }
    getTask();
  }, []);

  return (
    <div>
      <div>
        <div className="flex flex-col">
          <span className="font-bold text-2xl">
            {taskData && taskData?.title}'s Task
          </span>
        </div>
        <div>
          <div
            className="border ml-auto my-4 flex max-w-fit p-2 rounded-lg bg-slate-900 text-gray-300 justify-center items-center gap-1 hover:bg-slate-800 hover:text-slate-100 transition-all duration-500 cursor-pointer"
            onClick={() => {
              setClicked(true);
            }}
          >
            <span> New Task</span>
            <span>
              <PlusCircleIcon className="h-7" />
            </span>
          </div>
        </div>
      </div>

      <div className=" w-full md:grid md:grid-cols-3 gap-1 p-1 mt-5">
        {taskData &&
          taskData.todos.map((items) => (
            <Link key={items.id}>
              <Todo
                title={items.title}
                description={items.description}
                dueDate={items.dueDate}
                completed={items.completed}
                createdAt={items.createdAt}
                id={items.id}
                status={items.status}
              />
            </Link>
          ))}
      </div>
      {clicked && <Modal setClicked={setClicked} />}
    </div>
  );
}

export default ListDetails;
