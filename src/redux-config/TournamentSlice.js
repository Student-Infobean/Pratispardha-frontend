import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "../components/Webapi";
import axios from "axios";

export const getTournament = createAsyncThunk('TournamenetSlice/tournament', async () =>{
    try {
        
        let response =  await axios.get(WebApi.tournamentList);
        console.log(response.data.tournaments)
        return response.data.tournaments
    } catch (error) {
        console.log(error)
    }
})
const slice  = createSlice({
    name : 'TournamentSlice',
    initialState : {
        ogList : [],
        tournamentList : [],
    },
    extraReducers : (builder) =>{
        builder.addCase(getTournament.pending, (state, action) =>{
            state.isLoading = true;
        })
        .addCase(getTournament.rejected, (state, action) =>{
            state.isError  = true
        })
        .addCase(getTournament.fulfilled, (state, action) =>{
            state.ogList = action.payload
            state.tournamentList = action.payload.filter((item, index) =>new Date(item.startDate) > new Date())
            
        })
        
    },
    reducers : {
        filterName : (state, action) =>{
            if(action.payload =='')
                state.tournamentList = state.ogList;
            else
                state.tournamentList = state.tournamentList.filter((item) =>item.name.toUpperCase().includes(action.payload.toUpperCase()))
            
        },
        filterTournament : (state, action) =>{
            state.tournamentList  = state.ogList.filter(item =>
                action.payload === "Upcoming"
                    ? new Date(item.startDate) > new Date()
                    : action.payload === "Current"
                        ? new Date(item.startDate) < new Date() && (!item.endDate || new Date(item.endDate) > new Date())
                        : action.payload === "Completed"
                            ? item.endDate && new Date(item.endDate) < new Date()
                            : true 
            );
            console.log(state.tournamentList)
        }
    }
});

export default slice.reducer;
export const {filterName, filterTournament} = slice.actions