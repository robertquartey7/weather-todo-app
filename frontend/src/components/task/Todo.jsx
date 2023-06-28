import { CheckIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { deleteTask } from "../../utils/api";
import { toast } from "react-toastify";

function Todo({
  title,
  description,
  createdAt,
  dueDate,
  id,
  status,
  userId,
  completed,
}) {
  async function handleSubmit() {
    const data = await deleteTask({ id });
    if (data.status === 200) {
      toast.success("deleted Successfully");

      location.reload();
    }
  }

  // calculating the tiime
  function calculateTimeLeft(dueDate) {
    const now = new Date();

    const dueDateObj = new Date(dueDate);

    if (dueDateObj < now) {
      return "The due date has passed.";
    } else {
      const timeDifference = dueDateObj.getTime() - now.getTime();

      const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
      const seconds = Math.floor(timeDifference / 1000) % 60;
      const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
      const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      return {
        months,
        days,
        hours,
        minutes,
        seconds,
      };
    }
  }

  const { days, hours, minutes, seconds, months } = calculateTimeLeft(dueDate);

  return (
    <div className="border shadow-2xl  p-3 rounded-2xl w-full h-full col-span-1 flex flex-col justify-center">
      <div className="flex justify-between items-center gap-4 mb-2 ">
        <div className="flex flex-col gap-2">
          <div>
            <span className="font-semibold text-2xl mr-2">{title}</span>
            <span className="text-sm text-gray-500">{status}</span>
          </div>
          <span className="text-gray-600">{description}</span>
        </div>

        <div className="bg-red-500 w-fit flex flex-col p-2 rounded-md m-1 items-center">
          <span className="font-semibold text-2xl">Due</span>
          <span className="font-semibold ">{days > 0 && days} </span>
          <span>days</span>
        </div>
      </div>
      <hr />
      <div className="text-gray-500 flex gap-2 ">
        <div className="flex-grow">
          <span>
            <span> Created </span>
            {new Date(createdAt).toLocaleString(undefined, {
              day: "2-digit",
              month: "long",
            })}
          </span>
          <span> </span>
          <span>
            {new Date(createdAt).toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        <div>
          <span className=" cursor-pointer" onClick={handleSubmit}>
            {<TrashIcon className="h-5 mr-5 text-red-900" />}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Todo;
