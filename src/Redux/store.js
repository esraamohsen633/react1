import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from './MessagesSlice';

const store = configureStore({
  reducer: {
    messages: messagesReducer
  }
});

export default store;
