import Cookies from "js-cookie";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoute = ({ children }) => {

  let location = useLocation();


  if (!Cookies.get("token")) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
