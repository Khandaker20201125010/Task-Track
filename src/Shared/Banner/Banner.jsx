import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[500px]"
      style={{ backgroundImage: 'url("https://i.ibb.co.com/P1KGtNm/logo.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl font-bold uppercase drop-shadow-lg bg-gradient-to-r from-white via-green-700 to-white bg-clip-text text-transparent">
          Welcome to TaskTrack
        </h1>
        <p className="mt-4 text-lg max-w-2xl text-white">
          Stay organized, manage your tasks, and achieve your goals effortlessly with our intuitive task management system.
        </p>
       <Link to='dashboard'> <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-semibold transition duration-300">
          Get Started
        </button></Link>
      </div>
    </div>
  );
};

export default Banner;
