/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../services/user-api";

// First, create the thunk
export const getUsers = createAsyncThunk("users/getUsers", async (thunkAPI) => {
    const response = await api.getAll();
    return response.data;
});
export const getUserById = createAsyncThunk(
    "users/getUserById",
    async (id, thunkAPI) => {
        const response = await api.get(id);
        return response.data;
    }
);
export const setUser = createAsyncThunk(
    "users/setUser",
    async (user, thunkAPI) => {
        const response = await api.set(user);
        return response.data;
    }
);
export const updateUser = createAsyncThunk(
    "users/updateUser",
    async (user, thunkAPI) => {
        const response = await api.update(user);
        return response.data;
    }
);
export const removeUser = createAsyncThunk(
    "users/removeUser",
    async (id, thunkAPI) => {
        const response = await api.remove(id);
        return response.data;
    }
);

const initialState = {
    users: [],
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [getUsers.fulfilled]: (state, payload) => {
            state.users = payload;
        },
        [getUserById.fulfilled]: (state, payload) => {
            state.users = payload;
        },
        [setUser.fulfilled]: (state, payload) => {
            state.users = [...state.user, payload];
        },
        [updateUser.fulfilled]: (state, payload) => {
            state.users = state.map((item) =>
                item.id === payload.id ? payload : item
            );
        },
        [removeUser.fulfilled]: (state, payload) => {
            state.users = state.users.filter((item) => item.id !== payload.id);
        },
    },
});

export default userSlice.reducer;
