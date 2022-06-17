/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../services/room-api";

// First, create the thunk
export const getRooms = createAsyncThunk("rooms/getRooms", async () => {
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
    async (id, parcialRoom, thunkAPI) => {
        const response = await api.update(id, parcialRoom);
        return response.data;
    }
);
export const removeRoom = createAsyncThunk("rooms/removeRoom", async (id) => {
    const response = await api.remove(id);
    console.log("resp", response.data);
    return { id };
});

export const initialState = {
    rooms: [],
};

export const roomSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {},
    extraReducers: {
        [getRooms.fulfilled]: (state, action) => {
            state.rooms = action.payload;
        },
        [getRoomById.fulfilled]: (state, action) => {
            state.rooms = action.payload;
        },
        [setRoom.fulfilled]: (state, action) => {
            state.rooms = [...state.room, action.payload];
        },
        [updateRoom.fulfilled]: (state, action) => {
            state.rooms = state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
        },
        [removeRoom.fulfilled]: (state, action) => {
            console.log("esto", action);
            state.rooms = state.rooms.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});

export default roomSlice.reducer;
