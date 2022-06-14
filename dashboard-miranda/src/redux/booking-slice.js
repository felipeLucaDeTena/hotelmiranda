/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../services/booking-api";

// First, create the thunk
export const getBookings = createAsyncThunk(
    "bookings/getBookings",
    async (thunkAPI) => {
        const response = await api.getAll();
        return response.data;
    }
);
export const getBookingById = createAsyncThunk(
    "bookings/getBookingById",
    async (id, thunkAPI) => {
        const response = await api.get(id);
        return response.data;
    }
);
export const setBooking = createAsyncThunk(
    "bookings/setBooking",
    async (booking, thunkAPI) => {
        const response = await api.set(booking);
        return response.data;
    }
);
export const updateBooking = createAsyncThunk(
    "bookings/updateBooking",
    async (booking, thunkAPI) => {
        const response = await api.update(booking);
        return response.data;
    }
);
export const removeBooking = createAsyncThunk(
    "bookings/removeBooking",
    async (id, thunkAPI) => {
        const response = await api.remove(id);
        return response.data;
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
        [getBookings.fulfilled]: (state, payload) => {
            state.bookings = payload;
        },
        [getBookingById.fulfilled]: (state, payload) => {
            state.bookings = payload;
        },
        [setBooking.fulfilled]: (state, payload) => {
            state.bookings = [...state.booking, payload];
        },
        [updateBooking.fulfilled]: (state, payload) => {
            state.bookings = state.map((item) =>
                item.id === payload.id ? payload : item
            );
        },
        [removeBooking.fulfilled]: (state, payload) => {
            state.bookings = state.bookings.filter(
                (item) => item.id !== payload.id
            );
        },
    },
});

export default bookingSlice.reducer;
