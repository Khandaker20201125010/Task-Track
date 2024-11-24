import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import { SlMenu } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => {
    setClick(false);
  };
  const links = (
    <>
      <li>
        <NavLink
          data-tip="Home"
          className={({ isActive }) => {
            return isActive
              ? "font-bold text-green-500 hover:text-green-700 tooltip tooltip-success   tooltip-bottom"
              : "font-bold text-black hover:text-green-600 tooltip tooltip-success tooltip-bottom";
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>

     
      <li>
        <NavLink
          data-tip="Our Collections"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-green-600 hover:text-green-700 tooltip tooltip-success tooltip-bottom "
              : "font-bold text-black hover:text-green-600 tooltip tooltip-success tooltip-bottom "
          }
          to="/dashboard"
        >
         Dashboard
        </NavLink>
      </li>
     
    </>
  );
  return (
    <div className="container ">
      <div className="navbar bg-transparent">
        <div className="navbar-start fixed z-30 lg:hidden md:hidden">
          <div className="flex  gap-5 lg:gap-10 justify-center items-center">
            {/* Burger Icon */}
            <div onClick={handleClick}>
              {click ? (
                <AiOutlineClose
                  size={30}
                  className="text-xl text-green-500 lg:text-2xl cursor-pointer"
                />
              ) : (
                <SlMenu
                  size={30}
                  className="text-xl lg:text-2xl text-green-500 font-bold cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* Menu Items */}
          <div
            className={`fixed top-0 left-0 w-[350px] h-full bg-base-200 transition-transform duration-500 ease-in-out z-50 ${
              click ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Fixed Header in Burger Menu */}
            <div className="sticky top-0 bg-base-200 px-4 py-3 md:py-4 border-b border-gray-700 flex gap-2">
              <div className="text-2xl font-bold flex justify-between items-center">
                <a
                  onClick={closeMenu}
                  className="hover:text-orange-500 cursor-pointer border-2 border-orange-400"
                >
                  <LiaTimesSolid className="text-xl lg:text-2xl cursor-pointer" />
                </a>
              </div>
              <div><h3 className="text-2xl font-bold"><span className="text-green-500">Task</span>Track</h3></div>
            </div>

            {/* Scrollable Content with Hidden Scrollbar */}
            <ul
              className="overflow-y-scroll p-4 space-y-6 text-center text-3xl "
              style={{
                maxHeight: "calc(100vh - 64px)",
                scrollbarWidth: "none" /* For Firefox */,
                msOverflowStyle: "none" /* For Internet Explorer and Edge */,
              }}
            >
              {/* Hide Scrollbar for WebKit Browsers */}
              <style>{` ul::-webkit-scrollbar { display: none; } `}</style>

              {links}
            </ul>
          </div>

          {/* Background Shadow (Overlay) */}
          {click && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500"
              onClick={closeMenu} // Close menu when clicking on the overlay
            ></div>
          )}
        </div>
        <div className="flex-1">
          <a className=" text-3xl ml-10 font-bold"><span className="text-green-600">Task</span>Track</a>
        </div>
        <div className="flex-none">
          <ul className="flex gap-7 menu-horizontal px-1 max-sm:hidden">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
