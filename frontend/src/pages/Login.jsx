import { useForm } from "react-hook-form";
import { login } from "../utils/api";
import { toast } from "react-toastify";
import cookie from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  async function onSubmit({ email, password }) {
    // const deleteUser = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/delete`)
    // console.log(deleteUser)
    const user = await login({ email, password });

    if (user.status === 200) {
      cookie.set("token", user.data.token);
      console.log(user);
      toast.success("Login successfull");
      navigate("/");
    } else {
      console.log(user);
      toast.error("Login failed");
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col p-10 rounded-2xl shadow-md shadow-slate-700">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-slate-500">
            Welcome to WeatherTasker
          </span>
          <span className="text-slate-300 text-2xl mb-5 font-normal py-2 text-center">
            Login
          </span>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
            Login
          </button>
          <Link to={"/signup"}>
           Don't have an accouunt <span className="text-center text-blue-600">Sign</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
