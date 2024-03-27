import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Expense from "../Pages/Expense";
import ExpenseCategories from "../Pages/ExpenseCategories";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
          path: "/",
          element: <Dashboard></Dashboard>
        },
        {
          path: "/budget",
          element: <ExpenseCategories></ExpenseCategories>
        },
        {
          path: "/expense",
          element: <Expense></Expense>
        },
        {
          path: "/reports",
          element: <div>Reports page</div>
        },
        
      ]
    },
  ]);
export default router;