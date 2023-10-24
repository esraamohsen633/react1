import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { status: "idle", messages: [] };

export const getMsg = createAsyncThunk("Messages/getMsg", async () => {
  const token = localStorage.getItem("userToken");
  const response = await axios.get("https://sara7aiti.onrender.com/api/v1/message", {
    headers: {
      token: token,
    },
  });
  return response.data.allMessages;
});

const msgSlice = createSlice({
  name: "Messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMsg.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMsg.fulfilled, (state, action) => {
        state.messages = action.payload;
        state.status = "succeeded";
      })
      .addCase(getMsg.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default msgSlice.reducer;
