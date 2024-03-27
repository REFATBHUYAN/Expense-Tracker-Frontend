import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";

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
          path: "/expense",
          element: <div>expense page</div>
        },
        {
          path: "/reports",
          element: <div>Reports page</div>
        },
        
      ]
    },
  ]);
export default router;