import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "./slice/list";

const store = configureStore({
    reducer: {
        list: ListSlice.reducer
    },
    
})


export default store