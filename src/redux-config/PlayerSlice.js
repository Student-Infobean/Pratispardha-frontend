import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:"PlayerSlice",
    initialState:{
        activePlayer:{},
        isLoggedIn:false
    },
    reducers:{
        setCurrentPlayer:(state,action)=>{
            state.activePlayer=action.payload;
            state.isLoggedIn=true;
        }
    }
})
export const {setCurrentPlayer} =slice.actions;
export default slice;