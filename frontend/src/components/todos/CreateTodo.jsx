import React, { useState, useRef } from "react";

import { useForm } from "react-hook-form";
import { createTask } from "../../utils/api";
function CreateTodo() {
  const dataRef = useRef();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  async function onSubmit({ title, description }) {
    const newTask = await createTask({
      title,
      description,
      datetime: dataRef.current?.value,
    });
    console.log(newTask);
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
      <input
        {...register("description", { required: true })}
        aria-invalid={errors.description ? "true" : "false"}
        type="text"
        placeholder="Description"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {errors.description?.type === "required" && (
        <p role="alert" className="text-red-800">
          description is required
        </p>
      )}
      <div>
        <label htmlFor="time">Due Date</label>
        <input
          ref={dataRef}
          id="time"
          type="datetime-local"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-slate-500 rounded-lg p-2 hover:bg-slate-400"
      >
        Submit
      </button>
    </form>
  );
}

export default CreateTodo;
