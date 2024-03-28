import { createSlice } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
  name: "budget",
  initialState: [],
  reducers: {
    setBudget: (state, action) => {
      return action.payload;
    },
    
  },
});

export const { setBudget } = budgetSlice.actions;
export const selectBudget = (state) => state.budget;
export default budgetSlice.reducer;
