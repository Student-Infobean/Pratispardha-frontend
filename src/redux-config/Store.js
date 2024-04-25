import { configureStore } from "@reduxjs/toolkit";
import PlayerSlice from "./PlayerSlice";

const store=configureStore({
    reducer:{
        player:PlayerSlice
    }
});

export default store;