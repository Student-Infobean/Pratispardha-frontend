import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Teamrequest from "../components/Teamrequest";
import Api from "../components/Webapi";
import axios from "axios";
export const fetchTeamRequest = createAsyncThunk("playerSlice/fetchTeamRequest",async(playerId)=>{
    try{
       let response = await axios.get(`${Api.getPlayerbyId}/${playerId}`);
       console.log(response.data);
       return response.data;
    }
    catch(err){
      console.log(err);
    }
  });
const slice=createSlice({
    name:"PlayerSlice",
    initialState:{
        activePlayer:{},
        isLoggedIn:false,
        requestedTeam:[],
        isLoading: false,
        error: null,
    },
    reducers:{
        setCurrentPlayer:(state,action)=>{
            state.activePlayer=action.payload;
            state.isLoggedIn=true;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase( fetchTeamRequest.pending,(state,action)=>{
            state.isLoading=true;
        }).addCase(fetchTeamRequest.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.requestedTeam=action.payload.data;
        }).addCase(fetchTeamRequest.rejected,(state,action)=>{
            state.error="Oops something went wrong";
        })

    }
});
export const {setCurrentPlayer} =slice.actions;
export default slice.reducer;