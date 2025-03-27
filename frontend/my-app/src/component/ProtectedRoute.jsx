    import { Navigate, Outlet } from "react-router-dom";

    const ProtectedRoute = ({ isAuthenticated, isAdmin, adminOnly }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />; 
    }

    if (adminOnly && !isAdmin) {
        return <Navigate to="/home" />; 
    }

    return <Outlet />; 
    };

    export default ProtectedRoute;