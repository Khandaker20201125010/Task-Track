import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllTasks from "../Pages/AllTasks/AllTasks";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Addtask from "../Pages/AddTask/Addtask";
import ManageTask from "../Pages/DashBoard/ManageTask/ManageTask";
import UpdateTask from "../Pages/DashBoard/UpdateTask/UpdateTask";
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
        ]
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        children: [
           { 
            path:'add',
            element:<Addtask></Addtask>
        },
           { 
            path:'manageTask',
            element:<ManageTask></ManageTask>
        },
           { 
            path:'updateTask/:id',
            element:<UpdateTask></UpdateTask>
        },
        ]
      }
  ])