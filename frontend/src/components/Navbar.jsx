import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../utils/api";
import cookie from "js-cookie";
function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  getCurrentUser().then(({ data: { data } }) => {
    setUser(data.fullName);
  });
  function logout() {
    cookie.remove("token");
    navigate("/", { replace: true });
  }
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
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
