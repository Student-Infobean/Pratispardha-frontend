import { configureStore } from "@reduxjs/toolkit";
import PlayerSlice from "./PlayerSlice";
import TeamSlice from "./TeamSlice";
import AllPlayerSlice from './AllPlayerSlice'
import TournamentSlice from "./TournamentSlice";
import TeamDetail from "./TeamDetail";
const store=configureStore({
    reducer:{
        player:PlayerSlice,
        team:TeamSlice,
        AllPlayers  : AllPlayerSlice,
        Tournament : TournamentSlice,
        teamdetail : TeamDetail
    }
});

export default store;