import { useForm } from "react-hook-form";
import { signUp } from "../utils/api";
import { toast } from "react-toastify";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit({ fullName, email, password }) {
    const newUser = await signUp({ email, fullName, password });

    if (newUser.status !== 201) {
      toast.error("Sign up failed");
    } else {
      toast.success("Sign up successfull");
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col p-10  rounded-2xl shadow-md shadow-slate-700">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-slate-500">
            Welcome to WeatherTasker
          </span>
          <span className="text-slate-300 text-2xl font-normal py-2 mb-5 text-center">
            Sign up
          </span>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("fullName", { required: true })}
            aria-invalid={errors.fullName ? "true" : "false"}
            type="text"
            placeholder="Full Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.fullName?.type === "required" && (
            <p role="alert" className="text-red-800">
              Full Name is required
            </p>
          )}
          <input
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
            type="email"
            placeholder="Email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.email?.type === "required" && (
            <p role="alert" className="text-red-800">
              Email is required
            </p>
          )}
          <input
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
            type="password"
            placeholder="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.password?.type === "required" && (
            <p role="alert" className="text-red-800">
              Password is required
            </p>
          )}
          <button
            type="submit"
            className="bg-slate-500 rounded-lg p-2 hover:bg-slate-400"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
