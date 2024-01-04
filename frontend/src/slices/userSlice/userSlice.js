import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "../../store/statuses";

const initialState = {
  user: { role: "user" },
  isAuthenticated: false,
  status: STATUSES.IDLE,
};

const setLoadingState = (state) => {
  state.status = STATUSES.LOADING;
};

const handleAuthFulfilled = (state, action) => {
  state.user = action.payload;
  state.isAuthenticated = true;
  state.status = STATUSES.IDLE;
};

export const registerUser = createAsyncThunk("user/register", async (userData) => {

  const response = await axios.post("/api/v1/register", userData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data.user;
});

export const loginUser = createAsyncThunk("user/login", async (userData) => {
  const response = await axios.post("/api/v1/login", userData);
  return response.data.user;
});

export const logoutUser = createAsyncThunk("user/logout", async () => {
  await axios.get("/api/v1/logout");
});

export const loadUser = createAsyncThunk("user/load", async () => {
  const response = await axios.get("/api/v1/me");
  return response.data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, setLoadingState)
      .addCase(loginUser.pending, setLoadingState)
      .addCase(registerUser.fulfilled, handleAuthFulfilled)
      .addCase(loginUser.fulfilled, handleAuthFulfilled)
      .addCase(loadUser.fulfilled, handleAuthFulfilled)
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = { role: "user" };
        state.isAuthenticated = false;
        state.status = STATUSES.IDLE;
      });
  },
});

export default userSlice.reducer;
