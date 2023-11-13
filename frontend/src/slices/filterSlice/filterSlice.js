import { createSlice } from "@reduxjs/toolkit";

const filterslice = createSlice({
    name:"filter",
   initialState:[0,2500],
    reducers:{
        updateData:(state,action)=>{
            return action.payload;
        }
    }
});
export const { updateData } = filterslice.actions;
export default filterslice.reducer;