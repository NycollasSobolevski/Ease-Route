import { createSlice } from "@reduxjs/toolkit"


const userInitialValue = {
    token: null,
}

export const authSlice = createSlice({
    name: "user",
    initialState: userInitialValue,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        removeToken: (state) => {
            state.token = null;
        },
    },
})