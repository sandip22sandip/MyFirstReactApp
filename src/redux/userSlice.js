import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const currentUser = JSON.parse(localStorage.getItem("user")) || null;

export const updateUser = createAsyncThunk("users/update", async (user) => {
  // const response = await axios.post(
  //   "http://localhost:8800/api/users/1/update",
  //   user
  // );
  // return response.data;
  return user;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      firstname: currentUser?.firstname || "",
      lastname: currentUser?.lastname || "",
      email: currentUser?.email || "",
      avatar: currentUser?.avatar || "",
    },
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.pending = false;
      })
      .addCase(updateUser.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default userSlice.reducer;
