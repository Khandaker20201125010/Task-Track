import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllTasks from "../Pages/AllTasks/AllTasks";
import DashBoard from "../Pages/DashBoard/DashBoard";
  export const router = createBrowserRouter([
      {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/alltasks',
                element: <AllTasks></AllTasks>
            },
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
        ]
      },
  ])