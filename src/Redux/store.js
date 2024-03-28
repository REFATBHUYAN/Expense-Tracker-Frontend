import { configureStore } from '@reduxjs/toolkit'
import budgetReducer from './budgetSlice'
import categoriesReducer from './categorySlice'
import expenseReducer from './expenseSlice'

const store = configureStore({
  reducer: {
    budget: budgetReducer,
    category: categoriesReducer,
    expense: expenseReducer,
  },
})
export default store;