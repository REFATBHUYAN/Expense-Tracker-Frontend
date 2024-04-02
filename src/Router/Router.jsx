import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Expense from "../Pages/Expense";
import ExpenseCategories from "../Pages/ExpenseCategories";
import Reports from "../Pages/Reports";
import { Providers } from "../Redux/Provider";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Providers><Home></Home></Providers>,
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
          element: <Reports></Reports>
        },
        
      ]
    },
  ]);
export default router;