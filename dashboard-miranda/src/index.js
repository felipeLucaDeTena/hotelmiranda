import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { AuthProvider } from "./context/authcontext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <AuthProvider>
            <Provider store={store}>
                <DndProvider backend={HTML5Backend}>
                    <App />
                </DndProvider>
            </Provider>
        </AuthProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
