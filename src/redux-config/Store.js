import { configureStore } from "@reduxjs/toolkit";
import PlayerSlice from "./PlayerSlice";
import TeamSlice from "./TeamSlice";
import TeamdetailSlice from "./TeamdetailSlice";

const store=configureStore({
    reducer:{
        player:PlayerSlice,
        team:TeamSlice,
        teamdetail:TeamdetailSlice
    }
});

export default store;