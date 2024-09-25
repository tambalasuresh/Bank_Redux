import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  accessToken: null,
  user: null,
  loading: false,
  error: null,
  profile: null, // Add profile state
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.accessToken = action.payload; // Adjust according to your API response
      state.user = action.payload.user;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
      state.profile = null; // Clear profile on logout
    },
    setProfile: (state, action) => {
      state.profile = action.payload; // Set profile data
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, setProfile } = authSlice.actions;

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axios.post('https://api.tailortrix.com/rest/api/login/', { email, password });
    dispatch(loginSuccess(response.data));
    console.log("res",response.data)
  } catch (error) {
    dispatch(loginFailure(error.response.data.message || 'Login failed'));
  }
};

// Thunk to fetch profile data
export const fetchProfile = (accessToken) => async (dispatch) => {
  try {
    const response = await axios.get('https://api.tailortrix.com/rest/api/user/profile/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(setProfile(response.data)); // Store profile data
  } catch (error) {
    console.error("Failed to fetch profile:", error);
  }
};

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
