import { createSlice } from '@reduxjs/toolkit';

/* eslint-disable no-param-reassign */
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'Under construction',
  },
  reducers: {
    checkStatus: (state) => {
      state.status = 'Under construction';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
