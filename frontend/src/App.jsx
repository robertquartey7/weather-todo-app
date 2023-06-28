import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Weathercard from "./components/weather/weathercard";
import Task from "./components/todos/Task";
import Title from "./components/Title";
import { Link, Outlet } from "react-router-dom";
import Greet from "./components/Greet";
import { useDispatch } from "react-redux";

import { setLocation } from "./redux/currentLocationSlice";

function App() {
  const dispatch = useDispatch();
  async function currentLocation() {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        dispatch(setLocation({ lat: latitude, lng: longitude }));
      }
    );
  }

  useEffect(() => {
    currentLocation();
  }, []);

  return (
    <div className="min-w-screen min-h-screen md:grid md:grid-cols-12 relative bg-slate-300 ">
      <div className="md:col-span-1 md:static absolute bottom-3 left-1/2 transform -translate-x-1/2  md:transform-none">
        <Sidebar />
      </div>
      <div className="md:col-span-11    bg-gradient-to-r from-slate-200 via-slate-100 to-slate-50   text-black  md:min-h-screen">
        <div>
          <Navbar />
        </div>
        <span>
          <Greet />
        </span>

        <Outlet />
      </div>
    </div>
  );
}

export default App;
