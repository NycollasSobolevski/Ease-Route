import { createSlice } from "@reduxjs/toolkit"

const pageInitialValue = {
    value: "none",
    locationData: {
        label: "",
        description: "",
        geolocation: {},
    },
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
        },
        setData: (state, action) => {
            state.locationData = action.payload;
            console.log(state.locationData);
        },
    },
})