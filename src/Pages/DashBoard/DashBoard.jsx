import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="flex">
      <div className="w-64 p-6 min-h-screen bg-green-500">
        <div>
          <h3 className="text-3xl font-bold mb-2 text-center">Dashboard</h3>
        </div>
        <ul className="font-bold text-xl">
          <li>
            <NavLink to="/dashboard/add">Add Task</NavLink>
          </li>
        </ul>
        <ul className="font-bold text-xl">
          <li>
            <NavLink to="/dashboard/manageTask">Manage Task</NavLink>
          </li>
        </ul>
        <div className="divider"></div>
        <div className="px-6">
          <Link to="/">
          
            <button>
        
              <h1 className="text-xl font-bold">Home</h1>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1 p-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
