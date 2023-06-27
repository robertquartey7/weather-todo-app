import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

function WeatherSearch() {
  const { register, handleSubmit } = useForm();

  function onSubmit({ search }) {
 
  }
  return (
    <form className="w-fit ml-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative w-fit rounded overflow-hidden  flex justify-center items-center ">
        <input
          type="search"
          className="p-2"
          placeholder="Enter Location"
          required
          {...register("search")}
        />
        <button type="submit" className="bg-slate-800 w-10">
          <span className=" bg-slate-800 w-full h-full">
            <MagnifyingGlassIcon className="h-full w-full text-gray-100" />
          </span>
        </button>
      </div>
    </form>
  );
}

export default WeatherSearch;
