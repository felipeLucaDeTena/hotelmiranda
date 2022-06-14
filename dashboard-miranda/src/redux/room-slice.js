/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../services/room-api";

// First, create the thunk
export const getRooms = createAsyncThunk("rooms/getRooms", async (thunkAPI) => {
    const response = await api.getAll();
    return response.data;
});
export const getRoomById = createAsyncThunk(
    "rooms/getRoomById",
    async (id, thunkAPI) => {
        const response = await api.get(id);
        return response.data;
    }
);
export const setRoom = createAsyncThunk(
    "rooms/setRoom",
    async (room, thunkAPI) => {
        const response = await api.set(room);
        return response.data;
    }
);
export const updateRoom = createAsyncThunk(
    "rooms/updateRoom",
    async (room, thunkAPI) => {
        const response = await api.update(room);
        return response.data;
    }
);
export const removeRoom = createAsyncThunk(
    "rooms/removeRoom",
    async (id, thunkAPI) => {
        const response = await api.remove(id);
        return response.data;
    }
);

export const initialState = {
    rooms: [],
};

export const roomSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {},
    extraReducers: {
        [getRooms.fulfilled]: (state, payload) => {
            state.rooms = payload;
        },
        [getRoomById.fulfilled]: (state, payload) => {
            state.rooms = payload;
        },
        [setRoom.fulfilled]: (state, payload) => {
            state.rooms = [...state.room, payload];
        },
        [updateRoom.fulfilled]: (state, payload) => {
            state.rooms = state.map((item) =>
                item.id === payload.id ? payload : item
            );
        },
        [removeRoom.fulfilled]: (state, payload) => {
            state.rooms = state.rooms.filter((item) => item.id !== payload.id);
        },
    },
});

export default roomSlice.reducer;
