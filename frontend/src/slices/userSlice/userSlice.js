const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: "user",
    initialState: false,

    reducers: {
        updateData: (state, action) => {
            return action.payload;
        }
    }
});
export const { updateData } = userSlice.actions;
export default userSlice.reducer;