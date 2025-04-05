import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    email: '',
    theme: 'light', 
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateTheme: (state, action) => {
      state.theme = action.payload; 
    },
  },
});

export const { updateName, updateEmail, updateTheme } = profileSlice.actions;
export default profileSlice.reducer;
