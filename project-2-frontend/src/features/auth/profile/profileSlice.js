import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import profileService from './profileService';

// Get user profile
export const getProfile = createAsyncThunk(
  'tickets/getAll',
  // thunkAPI could get any state that we want
  // Using _ because we want to access thunkAPI without passing anything
  async (_, thunkAPI) => {
    try {
      // Fetch token from user object
      const token = thunkAPI.getState().auth.user.token;
      // Pass token to the service
      return await profileService.getProfile(token);
    } catch (error) {
      // Send message to API
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // If something went wrong, an error message would return
      return thunkAPI.rejectWithValue(message);
    }
  }
);
