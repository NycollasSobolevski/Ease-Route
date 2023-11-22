import { createSlice } from "@reduxjs/toolkit"

const pageInitialValue = {
    value: 0,
}

export const searchPageSlice = createSlice({
    name: "searchPage",
    initialState: pageInitialValue,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
})