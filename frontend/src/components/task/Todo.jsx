import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";

function Todo() {
  return (
    <div className="border shadow-2xl  p-3 rounded-2xl w-full col-span-1 ">
      <div className="flex justify-between items-center gap-4 mb-2 ">
        <div className="flex flex-col gap-2">
          <span>title</span>{" "}
          <span className="text-gray-600">Lorem ipsum dolor sit amet.</span>
        </div>
        <span className="bg-blue-700 p-1 rounded-full">
          <CheckIcon className="text-white h-5" />
        </span>
      </div>
      <hr />
      <div className="text-gray-500 flex gap-2">
        <span>time</span>
        <span>3:90:am</span>
      </div>
    </div>
  );
}

export default Todo;
