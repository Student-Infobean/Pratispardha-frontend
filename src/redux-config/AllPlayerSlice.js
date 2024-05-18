import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "../components/Webapi";
import axios from "axios";

export const getAllPlayers = createAsyncThunk('PlayerSlice/Players', async () =>{
    try {
        let response =  await axios.get(WebApi.getallplayer);
        return response.data.result
    } catch (error) {
        console.log(error)
    }
})
const slice  = createSlice({
    name : 'PlayerSlice',
    initialState : {
        playerList : [],
        filteredList : [],
        isLoading :false
    },
    extraReducers : (builder) =>{
        builder.addCase(getAllPlayers.pending, (state, action) =>{
            state.isLoading = true;
        })
        .addCase(getAllPlayers.rejected, (state, action) =>{
            state.isError  = true
        })
        .addCase(getAllPlayers.fulfilled, (state, action) =>{
            state.playerList = action.payload
            state.filteredList = action.payload.filter((player) => player.joinStatus ==false)
        })
        
    }
});

export default slice.reducer;