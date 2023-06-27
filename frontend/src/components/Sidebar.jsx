import {
  HomeIcon,
  CalendarIcon,
  RectangleStackIcon,
  Cog6ToothIcon,
  ClockIcon
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="flex md:flex-col justify-center md:h-full md:fixed md:w-20 gap-5 bg-slate-800 items-center p-3 sticky">
      <Link to={'/'}>
        <span className="cursor-pointer">
          <HomeIcon className="h-6 hover:text-slate-600" />
        </span>
      </Link>
      <Link to={'/weather'}>
        <span className="cursor-pointer">
          <ClockIcon className="h-6 hover:text-slate-600" />
        </span>
      </Link>
      <Link to={'/task'}> 
        <span className="cursor-pointer">
          <RectangleStackIcon className="h-6 hover:text-slate-600" />
        </span>
      </Link>
      <Link>
        <span className="cursor-pointer">
          <Cog6ToothIcon className="h-6 hover:text-slate-600" />
        </span>
      </Link>
    </div>
  );
}

export default Sidebar;
