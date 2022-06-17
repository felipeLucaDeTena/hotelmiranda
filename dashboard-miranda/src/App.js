/* eslint-disable react/no-array-index-key */

import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import LogIn from "./pages/login";
import { routes } from "./app-routes";
import { RequireAuth } from "./components/requireAuth";
import { useAuth } from "./context/authcontext";

function App() {
    const { authState } = useAuth();
    console.log(authState);
    const navigate = useNavigate();

    useEffect(() => {
        authState.authenticated
            ? navigate("/dashboard", { replace: true })
            : navigate("/login", { replace: true });
    }, [authState.authenticated]);

    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LogIn />} />
                {routes.map((route, i) => (
                    <Route
                        key={route.name + i}
                        path={route.path}
                        element={<RequireAuth>{route.component}</RequireAuth>}
                    />
                ))}
            </Routes>
        </div>
    );
}

export default App;
