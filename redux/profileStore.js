import { configureStore } from '@reduxjs/toolkit'; 
import profileReducer from './profileSlice';

const profileStore = configureStore({ reducer: { profile: profileReducer, }, });

export default profileStore;