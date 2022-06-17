/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../services/contact-api";

// First, create the thunk
export const getContacts = createAsyncThunk(
    "contacts/getContacts",
    async (thunkAPI) => {
        const response = await api.getAll();
        return response.data;
    }
);
export const getContactById = createAsyncThunk(
    "contacts/getContactById",
    async (id, thunkAPI) => {
        const response = await api.get(id);
        return response.data;
    }
);
export const setContact = createAsyncThunk(
    "contacts/setContact",
    async (id, parcialContact, thunkAPI) => {
        const response = await api.set(id, parcialContact);
        return response.data;
    }
);
export const updateContact = createAsyncThunk(
    "contacts/updateContact",
    async (contact, thunkAPI) => {
        const response = await api.update(contact);
        return response.data;
    }
);
export const removeContact = createAsyncThunk(
    "contacts/removeContact",
    async (id, thunkAPI) => {
        const response = await api.remove(id);
        return response.data;
    }
);

const initialState = {
    contacts: [],
};

export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
    extraReducers: {
        [getContacts.fulfilled]: (state, payload) => {
            state.contacts = payload;
        },
        [getContactById.fulfilled]: (state, payload) => {
            state.contacts = payload;
        },
        [setContact.fulfilled]: (state, payload) => {
            state.contacts = [...state.contact, payload];
        },
        [updateContact.fulfilled]: (state, payload) => {
            state.contacts = state.map((item) =>
                item.id === payload.id ? payload : item
            );
        },
        [removeContact.fulfilled]: (state, payload) => {
            state.contacts = state.contacts.filter(
                (item) => item.id !== payload.id
            );
        },
    },
});

export default contactSlice.reducer;
