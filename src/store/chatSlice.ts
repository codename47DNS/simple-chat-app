import { createSlice } from '@reduxjs/toolkit';
import { mockMessages } from '../data/mockData';  // Import your mock data

const initialState = {
  messages: mockMessages,  // Initialize with mock messages
  currentUser: 'User1',    // Assume User1 is the current user
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      // Push the sent message to the state
      state.messages.push({
        ...action.payload,
        timestamp: new Date().toISOString(),
      });
    },
    receiveMessage: (state, action) => {
      // Push the received message to the state
      state.messages.push({
        ...action.payload,
        timestamp: new Date().toISOString(),
      });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
