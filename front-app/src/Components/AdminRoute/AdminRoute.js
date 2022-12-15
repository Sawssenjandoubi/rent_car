import { Navigate } from "react-router-dom";
const AdminRoute = ({ children }) => {
    let token = localStorage.getItem("token");
    let isUser = localStorage.getItem("isUser");
    let isAdmin = localStorage.getItem("isAdmin");
    let isProvider = localStorage.getItem("isProvider");
    if (!isUser && !isProvider  && !isAdmin   && !token ) {
        return <Navigate to="/register" />;
    } 
    return children;
};
export default  AdminRoute;

