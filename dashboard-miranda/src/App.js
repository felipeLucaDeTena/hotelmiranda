import React, { useContext, useEffect } from "react";
import {
    Navigate,
    Route,
    Routes,
    useLocation,
    useNavigate,
} from "react-router-dom";
import "./App.css";
import LogIn from "./pages/login";
import { routes } from "./app-routes";
import { AuthContext } from "./context/authcontext";

export function App() {
    const RequireAuth = useContext(AuthContext);

    return (
        <div className="App">
            <Routes>
                <Route path="login" element={<LogIn />} />
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<RequireAuth component={route.component} />}
                    />
                ))}
            </Routes>
        </div>
    );
}
