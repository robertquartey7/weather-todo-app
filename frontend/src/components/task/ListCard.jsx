import { TrashIcon } from "@heroicons/react/24/solid";

import { ListBulletIcon } from "@heroicons/react/24/solid";
import { deleteList } from "../../utils/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function ListCard({ list }) {
  async function handleSubmit() {
    console.log(list.id);
    const deletedList = await deleteList({ id: list.id });
    if (deletedList.status === 200) {
      toast.success("List deleted Successfully");
      location.reload();
    }
  }

  return (
    <div className="ml-5 bg-slate-50 shadow-2xl h-10 rounded pl-5 flex my-2 items-center ">
      <span className="flex-grow">
        <Link className="flex gap-2" to={`${list.id}`}>
          <span>
            <ListBulletIcon className="h-6" />
          </span>
          <span> {list.title}</span>
        </Link>
      </span>

      <span className=" cursor-pointer" onClick={handleSubmit}>
        {<TrashIcon className="h-5 mr-5 text-red-900" />}
      </span>
    </div>
  );
}

export default ListCard;
