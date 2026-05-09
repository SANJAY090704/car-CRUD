import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {

    let user = localStorage.getItem("login");

    if(user == "true")
    {
        return children;
    }
    else
    {
        return <Navigate to="/signin" />
    }

}

export default ProtectedRoute;