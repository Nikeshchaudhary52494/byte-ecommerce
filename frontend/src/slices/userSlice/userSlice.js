import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../store/statuses";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { role: "user" },
    isAuthenticated: false,
    status: STATUSES.IDLE
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.status = STATUSES.IDLE;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.status = STATUSES.IDLE;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = { role: "user" };
        state.isAuthenticated = false;
        state.status = STATUSES.IDLE;
      })
  }

})
export default userSlice.reducer;
export const registerUser = createAsyncThunk("user/register",
  async (userData) => {
    const { data } = await axios.post('/api/v1/register', userData);
    return data.user;
  });
export const loginUser = createAsyncThunk("user/login",
  async (userData) => {
    const { data } = await axios.post('/api/v1/login', userData);
    return data.user;
  });
export const logoutUser = createAsyncThunk("user/logout",
  async () => {
    await axios.get('/api/v1/logout')
  }
)

