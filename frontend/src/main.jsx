import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Weather from "./pages/Weather.jsx";
import Task from "./pages/Task.jsx";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import ListDetails from "./components/task/ListDetails.jsx";
import List from "./components/task/List.jsx";
import ProtectedRoute from "./utils/ProtectedRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
      {
        path: "/task",
        element: <Task />,
        children: [
          {
            path: "",
            element: <List />,
          },
          {
            path: ":id",
            element: <ListDetails />,
          },
        ],
      },
    ],
  },

  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      <RouterProvider router={router}></RouterProvider>
    </Provider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </React.StrictMode>
);
