import React, { useRef } from "react";

import { useForm } from "react-hook-form";
import { createList } from "../../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function CreateList() {
  const dataRef = useRef();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit({ title }) {
    const { status } = await createList({
      title,
    });
    if (status === 201) {
      toast.success("List Created");
      navigate("/", { replace: true });
    } else {
      toast.error("Something went wrong");
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title", { required: true })}
        aria-invalid={errors.title ? "true" : "false"}
        type="text"
        placeholder="Title"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {errors.title?.type === "required" && (
        <p role="alert" className="text-red-800">
          title is required
        </p>
      )}

      <button
        type="submit"
        className="bg-slate-500 rounded-lg p-2 hover:bg-slate-400"
      >
        Submit
      </button>
    </form>
  );
}

export default CreateList;
