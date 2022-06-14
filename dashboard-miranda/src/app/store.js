import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../redux/users-slice";
import bookingsReducer from "../redux/booking-slice";
import contactReducer from "../redux/contact-slice";
import roomsReducer from "../redux/room-slice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        bookings: bookingsReducer,
        contact: contactReducer,
        rooms: roomsReducer,
    },
});
