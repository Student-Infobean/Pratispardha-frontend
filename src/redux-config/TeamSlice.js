import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../components/Webapi"
export const getTeams = createAsyncThunk("TeamSLice/getTeams", async () => {
    try {
        let response = await axios.get(Api.teamList);
        console.log(response.data);
        return response.data.teams
    } catch (error) {
    }
});
const slice = createSlice({
    name: "TeamSlice",
    initialState: {
        teamList:[],
        isLoading: false,
        error: null,
    },
    extraReducers:(builder)=>{
        builder.addCase(getTeams.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(getTeams.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.teamList = action.payload;
        }).addCase(getTeams.rejected,(state,action)=>{
            state.error ="Oops !  something wents wrong" ;
        });
    }
});


export default slice.reducer;