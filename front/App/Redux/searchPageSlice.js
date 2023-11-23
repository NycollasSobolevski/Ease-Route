import { createSlice } from "@reduxjs/toolkit"

const pageInitialValue = {
    value: "none",
}

export const searchPageSlice = createSlice({
    name: "searchPage",
    initialState: pageInitialValue,
    reducers: {
        setPage: (state, action) => {
            state.value = action.payload;
            console.log(state.value);
        },
        goToInitPage: (state) => {
            state.value = "none";
        }
    },
})