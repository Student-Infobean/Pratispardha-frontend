import { configureStore } from "@reduxjs/toolkit";
import PlayerSlice from "./PlayerSlice";
import TeamSlice from "./TeamSlice";

const store=configureStore({
    reducer:{
        player:PlayerSlice,
        team:TeamSlice
    }
});

export default store;