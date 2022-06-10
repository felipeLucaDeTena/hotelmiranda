import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ children, authenticated }) {
    const auth = authenticated;
    const location = useLocation();
    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}
