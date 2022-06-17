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
    async (id, parcialUser, thunkAPI) => {
        const response = await api.update(id, parcialUser);
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
        [getUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
        [getUserById.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
        [setUser.fulfilled]: (state, action) => {
            state.users = [...state.user, action.payload];
        },
        [updateUser.fulfilled]: (state, action) => {
            state.users = state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
        },
        [removeUser.fulfilled]: (state, action) => {
            state.users = state.users.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});

export default userSlice.reducer;
