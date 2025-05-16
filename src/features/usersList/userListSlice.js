import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  error: null,
};
export const fetchUsers = createAsyncThunk(
  'userList/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) {
        // throw new Error('Server error');
        return rejectWithValue({ status: res.status, message: 'ERROR' });
      }
      return res.json();
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to get users data');
    }
  },
);

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    deleteUser(state, action) {
      console.log("Delete action received with payload:", action.payload);
      console.log("Before filter:", state.users.length);
      state.users = state.users.filter((user) => user.id !== action.payload);
      console.log("After filter:", state.users.length);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default userListSlice.reducer;
export const { addUser, deleteUser } = userListSlice.actions;
export const { users } = initialState.users;

console.log(userListSlice);
