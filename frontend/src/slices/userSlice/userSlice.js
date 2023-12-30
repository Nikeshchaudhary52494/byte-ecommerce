
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../store/statuses";
import axios from "axios";

const setLoadingState = (state) => {
  state.status = STATUSES.LOADING;
};

const handleAuthFulfilled = (state, action) => {
  state.user = action.payload;
  state.isAuthenticated = true;
  state.status = STATUSES.IDLE;
};

const makeRequest = async (url, method, data) => {
  try {
    const response = await axios({ url, method, data });
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

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
  }
});

export default userSlice.reducer;

export const registerUser = createAsyncThunk("user/register", async (userData) => {
  return makeRequest('/api/v1/register', 'post', userData);
});
export const loginUser = createAsyncThunk("user/login", async (userData) => {
  return makeRequest('/api/v1/login', 'post', userData);
});
export const logoutUser = createAsyncThunk("user/logout", async () => {
  await axios.get('/api/v1/logout');
});
export const loadUser = createAsyncThunk("user/load", async () => {
  return makeRequest('/api/v1/me', 'get');
});
