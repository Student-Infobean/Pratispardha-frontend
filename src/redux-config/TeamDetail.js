import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../components/Webapi";

export const getTeamById = createAsyncThunk("Teamdetail/getTeamById",async (id) => {
  
    try {
      let response = await axios.get(`${Api.getTeamId}/${id}`);
      return response.data.team
    } catch (error) {
      console.log(error)
      console.error("Error fetching team by ID:", error);
      
    }
  }
);

const slice = createSlice({
  name: "TeamdetailSlice",
  initialState: {
    team: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTeamById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTeamById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.team = action.payload;
      })
      .addCase(getTeamById.rejected, (state, action) => {
        state.isLoading = false; // Set loading state to false
        state.error = action.error.message || "Oops! Something went wrong";
      });
  },
});

export default slice.reducer;