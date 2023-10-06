import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './contact/initialState';
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterByName: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
  },
});

export const { setFilterByName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
