import { Component } from "react";
import styled from "styled-components";
import SideNav from "./components/nav/side-nav";
import TopNav from "./components/nav/top-nav";
import BookingDetails from "./pages/booking-details";
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
    align-items: center;
    background-color: #e5e5e5;
`;

export const routes = [
    {
        name: "dashboard",
        path: "/",
        component: (
            <>
                <SideNav />
                <Pagecontainer>
                    <TopNav />
                    <Dashboard />
                </Pagecontainer>
            </>
        ),
    },
    {
        name: "rooms",
        path: "/rooms",
        component: (
            <>
                <SideNav />
                <Pagecontainer>
                    <TopNav />
                    <Rooms />
                </Pagecontainer>
            </>
        ),
    },
    {
        name: "bookings",
        path: "/bookings",
        component: (
            <>
                <SideNav />
                <Pagecontainer>
                    <TopNav />
                    <Bookings />
                </Pagecontainer>
            </>
        ),
    },
    {
        name: "contact",
        path: "/contact",
        component: (
            <>
                <SideNav />
                <Pagecontainer>
                    <TopNav />
                    <Contact />
                </Pagecontainer>
            </>
        ),
    },
    {
        name: "users",
        path: "/users",
        component: (
            <>
                <SideNav />
                <Pagecontainer>
                    <TopNav />
                    <Users />
                </Pagecontainer>
            </>
        ),
    },
    {
        name: "roomdetails",
        path: "/room/:id",
        component: (
            <>
                <SideNav />
                <Pagecontainer>
                    <TopNav />
                    <RoomDetails />
                </Pagecontainer>
            </>
        ),
    },
    {
        name: "bookings",
        path: "/booking/:id",
        component: (
            <>
                <SideNav />
                <Pagecontainer>
                    <TopNav />
                    <BookingDetails />
                </Pagecontainer>
            </>
        ),
    },
];
