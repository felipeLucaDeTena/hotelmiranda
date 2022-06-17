/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../services/booking-api";

// First, create the thunk
export const getBookings = createAsyncThunk(
    "bookings/getBookings",
    async () => {
        const response = await api.getAll();
        return response.data;
    }
);
export const getBookingById = createAsyncThunk(
    "bookings/getBookingById",
    async (id) => {
        const response = await api.get(id);
        return response.data;
    }
);
export const setBooking = createAsyncThunk(
    "bookings/setBooking",
    async (booking) => {
        const response = await api.set(booking);
        return response.data;
    }
);
export const updateBooking = createAsyncThunk(
    "bookings/updateBooking",
    async (id, parcialBooking) => {
        const response = await api.update(id, parcialBooking);
        return response.data;
    }
);
export const removeBooking = createAsyncThunk(
    "bookings/removeBooking",
    async (id) => {
        const response = await api.remove(id);
        return { id };
    }
);

const initialState = {
    bookings: [],
};

export const bookingSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {},
    extraReducers: {
        [getBookings.fulfilled]: (state, action) => {
            state.bookings = action.payload;
        },
        [getBookingById.fulfilled]: (state, action) => {
            state.bookings = action.payload;
        },
        [setBooking.fulfilled]: (state, action) => {
            state.bookings = [...state.booking, action.payload];
        },
        [updateBooking.fulfilled]: (state, action) => {
            state.bookings = state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
        },
        [removeBooking.fulfilled]: (state, action) => {
            state.bookings = state.bookings.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});

export default bookingSlice.reducer;
