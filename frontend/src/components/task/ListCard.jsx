import React from "react";

import { ListBulletIcon } from "@heroicons/react/24/solid";
function ListCard({ list }) {
  return (
    <div className="ml-5 bg-slate-50 shadow-2xl h-10 rounded pl-5 flex my-2 items-center">
      <span className="flex gap-2">
        <span>
          <ListBulletIcon className="h-6" />
        </span>
        <span> {list.title}</span>
      </span>
    </div>
  );
}

export default ListCard;
