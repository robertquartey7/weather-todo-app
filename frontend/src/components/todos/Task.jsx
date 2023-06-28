import { Link } from "react-router-dom";
import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import { getAllList } from "../../utils/api";
import ListCard from "../task/ListCard";
import { ListBulletIcon, TrashIcon } from "@heroicons/react/24/solid";

function Task() {
  const [listData, setListData] = useState(null);

  useEffect(() => {
    async function getListData() {
      const { data } = await getAllList();

      if (data) {
        setListData(data.data);
        console.log(data.data);
      }
    }
    getListData();
  }, []);

  return (
    <div>
      <div>
        {listData &&
          listData.map((item) => {
            console.log(item);
            return (
              <div key={item.id} className="h-20 ">
                <div className="ml-5 bg-slate-50 shadow-2xl h-full rounded pl-5 flex my-2 items-center ">
                  <span className="flex-grow">
                    <Link className="flex gap-2" to={`${'/'}`}>
                      <span>
                        <ListBulletIcon className="h-6" />
                      </span>
                      <span> {item.title}</span>
                    </Link>
                  </span>

                  <span className=" cursor-pointer">
                    {<TrashIcon className="h-5 mr-5 text-red-900" />}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Task;
