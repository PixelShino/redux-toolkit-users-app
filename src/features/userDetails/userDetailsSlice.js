import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const initialState = {
  selectedUserId: null,
};

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    selectedUser(state, action) {
      state.selectedUserId = action.payload;
    },
    clearSelectedUser(state) {
      state.selectedUserId = null;
    },
  },
});

export default userDetailsSlice.reducer;
export const { selectedUser, clearSelectedUser } = userDetailsSlice.actions;
