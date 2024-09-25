import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define async thunks for fetching data from two different APIs

// First API: Fetching users
export const fetchUsers = createAsyncThunk('api/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

// Second API: Fetching posts
export const fetchPosts = createAsyncThunk('api/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

// Create the slice
const apiSlice = createSlice({
  name: 'api',
  initialState: {
    users: [],      // For storing users data
    posts: [],      // For storing posts data
    loadingUsers: false,
    loadingPosts: false,
    errorUsers: null,
    errorPosts: null,
  },
  reducers: {
    clearData: (state) => {
      state.users = [];
      state.posts = [];
      state.loadingUsers = false;
      state.loadingPosts = false;
      state.errorUsers = null;
      state.errorPosts = null;
    },
  },
  extraReducers: (builder) => {
    // Handle fetchUsers API
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loadingUsers = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loadingUsers = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.errorUsers = action.error.message;
        state.loadingUsers = false;
      });

    // Handle fetchPosts API
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loadingPosts = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loadingPosts = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.errorPosts = action.error.message;
        state.loadingPosts = false;
      });
  },
});

export const { clearData } = apiSlice.actions;

export default apiSlice.reducer;
