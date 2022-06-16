import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authcontext";

export function RequireAuth({ children }) {
    const { authState } = useAuth();
    const location = useLocation();
    if (authState.authenticated === false) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}
