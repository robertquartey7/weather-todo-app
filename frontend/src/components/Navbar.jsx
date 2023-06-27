import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../utils/api";

function Navbar() {
  const [user, setUser] = useState(null);
  getCurrentUser().then(({ data: { data } }) => {
    setUser(data.fullName);
  });

  return (
    <nav className="h-20 bg-slate-100 shadow-lg flex justify-between px-10">
      <div>
        <Link to={"/"}>
          <img src="/img/logo.png" alt="" className="h-full" />
        </Link>
      </div>
      <div></div>
      <div className="flex flex-col items-center">
        <div className="bg-slate-500 h-full rounded-full w-14">
          <img src="" alt="" />
        </div>
        <span className="">{user && user}</span>
      </div>
    </nav>
  );
}

export default Navbar;
