import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

function Title({title, link}) {
  console.log(link)
  return (
    <div className="h-10 w-full flex mt-10 justify-between px-10">
      <span className="font-bold text-2xl">{title}</span>
      <span className="h-full bg-slate-200 cursor-pointer rounded-md ">
       <Link to={link}>
       <ArrowUpRightIcon className="h-full" />
       </Link>
      </span>
    </div>
  );
}

export default Title;
