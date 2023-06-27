import { useEffect, useState } from "react";
import Modal from "../Model";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import ListCard from "./ListCard";
import Loading from "../Loading";
import { getAllList } from "../../utils/api";
function List() {
  const [clicked, setClicked] = useState(false);
  const [listData, setListData] = useState(null);

  useEffect(() => {
    async function getListData() {
      const { data } = await getAllList();

      if (data) {
        setListData(data.data);
     
      }
    }
    getListData();
  }, []);





  
  return (
    <div>
      <div>
        <div>
          <span className="font-bold text-2xl">My Lists</span>
          <div>
            <div
              className="border ml-auto my-4 flex max-w-fit p-2 rounded-lg bg-slate-900 text-gray-300 justify-center items-center gap-1 hover:bg-slate-800 hover:text-slate-100 transition-all duration-500 cursor-pointer"
              onClick={() => {
                setClicked(true);
              }}
            >
              <span> New List</span>
              <span>
                <PlusCircleIcon className="h-7" />
              </span>
            </div>
          </div>
        </div>
        <div>
          {listData ? (
            <div>
              {listData &&
                listData.map((item) => (
                  <Link to={`/task/${item.id}`}>
                    <ListCard list={item} key={item.id} />
                  </Link>
                ))}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
      {clicked && <Modal setClicked={setClicked} type={"list"} />}
    </div>
  );
}

export default List;
