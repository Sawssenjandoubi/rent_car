import { Navigate } from "react-router-dom";

const UserRoute = ({ children }) => {
    let token = localStorage.getItem("token");
    let isUser = localStorage.getItem("isUser");
    let isAdmin = localStorage.getItem("isAdmin");
    let isProvider = localStorage.getItem("isProvider");
    if (!isProvider && ! isAdmin  &&  isUser && token ) {
        return <Navigate to="/DashboardUser" />;
    }
    return children;
};
export default  UserRoute ;