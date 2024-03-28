import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: [],
  reducers: {
    setExpense: (state, action) => {
      return action.payload;
    },
    
  },
});

export const { setExpense } = expenseSlice.actions;
export const selectExpense = (state) => state.expense;
export default expenseSlice.reducer;
