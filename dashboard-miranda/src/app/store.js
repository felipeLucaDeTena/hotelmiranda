import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users-slice";
import bookingsReducer from "../features/booking-slice";
import contactReducer from "../features/contact-slice";
import roomsReducer from "../features/room-slice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        bookings: bookingsReducer,
        contact: contactReducer,
        rooms: roomsReducer,
    },
});
