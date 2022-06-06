import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

    const logIn = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const isAuth = localStorage.getItem("user");

    useEffect(() => {
        auth
            ? navigate("/dashboard", { replace: true })
            : navigate("/login", { replace: true });
    }, [auth]);

    function RequireAuth(props) {
        return !auth ? navigate("/login", { replace: true }) : props.component;
    }

    return (
        <AuthContext.Provider
            value={{ user, setUser, auth, setAuth, logIn, isAuth, RequireAuth }}
        >
            {children}
        </AuthContext.Provider>
    );
}
