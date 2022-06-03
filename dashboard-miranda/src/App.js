import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import SideNav from "./components/nav/side-nav";
import TopNav from "./components/nav/top-nav";
import Bookings from "./pages/bookings";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import RoomDetails from "./pages/room-details";
import Rooms from "./pages/rooms";
import Users from "./pages/users";

const Pagecontainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #e5e5e5;
    align-items: center;
`;

// function RequireAuth(page) {
//     const auth = useAuth();
//     return !auth ? <Navigate to="/login" /> : page;
// }

function App() {
    return (
        <div className="App">
            <SideNav />
            <Pagecontainer>
                <TopNav />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/bookings/:id" element={<RoomDetails />} />
                </Routes>
            </Pagecontainer>
        </div>
    );
}

export default App;
