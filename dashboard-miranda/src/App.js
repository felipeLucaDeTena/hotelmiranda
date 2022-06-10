/* eslint-disable react/no-array-index-key */

import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import LogIn from "./pages/login";
import { routes } from "./app-routes";
import { AuthProvider } from "./context/authcontext";
import { RequireAuth } from "./components/requireAuth";
import RoomDetails from "./pages/room-details";

function App() {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(
        localStorage.getItem("authenticated") !== null
    );

    useEffect(() => {
        authenticated
            ? localStorage.setItem("authenticated", "1")
            : localStorage.removeItem("authenticated");
        authenticated
            ? navigate("/", { replace: true })
            : navigate("/login", { replace: true });
    }, [authenticated]);

    return (
        <div className="App">
            <AuthProvider authenticated={authenticated}>
                <Routes>
                    <Route
                        path="/login"
                        element={<LogIn setAuthenticated={setAuthenticated} />}
                    />
                    {routes.map((route, i) => (
                        <Route
                            key={route.name + i}
                            path={route.path}
                            element={
                                <RequireAuth authenticated={authenticated}>
                                    {route.component}
                                </RequireAuth>
                            }
                        />
                    ))}
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
