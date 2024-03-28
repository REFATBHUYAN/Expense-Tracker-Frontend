import { createSlice } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
  name: "budget",
  initialState: [],
  reducers: {
    setBudget: (state, action) => {
      return action.payload;
    },
    updateBudget: (state, action) => {
      const { id, totalBudget } = action.payload;
      console.log(state);

      const item = state?.find((item) => item.id === id);

      if (item) {
         item.totalBudget = totalBudget;
        
      }
      
    },
    
  },
});

export const { setBudget,updateBudget } = budgetSlice.actions;
export const selectBudget = (state) => state.budget;
export default budgetSlice.reducer;
