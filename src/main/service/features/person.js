import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "person",
  initialState: [],
  reducers: {
    add: (action, state) => {
      return [...state, action.payload];
    },
    addMany: (action, state) => {
      return [...state, ...action.payload];
    }
  }
})

export const personActions = actions;
export const personReducer = reducer;
