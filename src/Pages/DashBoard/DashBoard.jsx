import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex'>
            <div className='w-64 p-6 min-h-screen bg-green-500'>
                <div>
                    <h3 className='text-3xl font-bold mb-2'>Dashboard</h3>
                </div>
                <ul className='font-bold'>
                    <li>
                        <NavLink to='/dashboard/add'>Add Task</NavLink>
                    </li>
                </ul>
                <ul className='font-bold'>
                    <li>
                        <NavLink to='/dashboard/manageTask'>Manage Task</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 p-6'>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default DashBoard;