import { Link } from "react-router-dom";
import TaskCard from "./TaskCard";

function Task() {
  return (
    <div>
      <div>
        <Link>
          <TaskCard />
        </Link>
        <Link>
          <TaskCard />
        </Link>
        <Link>
          <TaskCard />
        </Link>
        <Link>
          <TaskCard />
        </Link>
      </div>
    </div>
  );
}

export default Task;
