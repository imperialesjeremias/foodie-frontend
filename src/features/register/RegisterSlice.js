import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerJWT } from "../../utils/auth";

export const register = createAsyncThunk('u/register', async ({ email, password}) => {
    try {
        const response = await registerJWT({ email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
});

const registrationSlice = createSlice({
    name: 'register',
    initialState: {
        email: null,
        token: null,
        isRegistered: false,
        error: null
    },
    reducers: {
        resetRegistration: (state) => {
            state.email = null;
            state.token = null;
            state.isRegistered = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.fulfilled, (state, action) => {
           return {
            ...state,
            email: action.payload.email,
            token: action.payload.token,
            error: null
           }
        })
        .addCase(register.rejected, (state, action) => {
            return {
                ...state,
                isRegistered: true,
                error: action.error.message
            }
        });
    },
});

export const { resetRegistration } = registrationSlice.actions;
export default registrationSlice.reducer;