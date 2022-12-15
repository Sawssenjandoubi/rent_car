import { Navigate } from "react-router-dom";

const ProviderRoute = ({ children }) => {
    let token = localStorage.getItem("token");
    let isUser = localStorage.getItem("isUser");
    let isAdmin = localStorage.getItem("isAdmin");
    let isProvider = localStorage.getItem("isProvider");
    if (!isUser && ! isAdmin  && isProvider && token ) {
        return <Navigate to="/dashboard" />;
    }
    return children;
};
export default ProviderRoute;