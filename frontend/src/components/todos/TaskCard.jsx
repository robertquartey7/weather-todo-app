import React from "react";

function TaskCard() {
  return (
    <div className="border border-slate-300 p-2 shadow-xl rounded-md mb-2 flex gap-5">
      <div className="bg-red-500 w-fit flex flex-col p-2 rounded-md m-1 items-center">
        <span className="font-semibold text-2xl">Due</span>
        <span className="font-semibold ">2D</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-bold">Lorem ipsum dolor sit amet.</span>
        <span className="text-gray-500">descripton</span>
      </div>
    </div>
  );
}

export default TaskCard;
