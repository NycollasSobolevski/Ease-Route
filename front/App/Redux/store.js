import { configureStore } from "@reduxjs/toolkit";
import { searchPageSlice } from "./searchPageSlice";

export const store = configureStore({
    reducer: {
        searchPage: searchPageSlice.reducer
        
    },

})