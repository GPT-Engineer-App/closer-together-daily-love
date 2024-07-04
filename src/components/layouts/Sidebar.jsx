import React from 'react';
import { FaHome, FaTasks, FaBook, FaBullseye, FaCog, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-full bg-gray-800 text-white flex flex-col justify-between">
      <div>
        <div className="p-4">
          <img src="/placeholder.svg" alt="logo" className="mx-auto object-cover w-24 h-24" />
        </div>
        <nav className="mt-10">
          <a href="#" className="flex items-center p-4 hover:bg-gray-700">
            <FaHome className="mr-3" /> Dashboard
          </a>
          <a href="#" className="flex items-center p-4 hover:bg-gray-700">
            <FaTasks className="mr-3" /> Daily Tasks
          </a>
          <a href="#" className="flex items-center p-4 hover:bg-gray-700">
            <FaBook className="mr-3" /> Journal
          </a>
          <a href="#" className="flex items-center p-4 hover:bg-gray-700">
            <FaBullseye className="mr-3" /> Goals
          </a>
          <a href="#" className="flex items-center p-4 hover:bg-gray-700">
            <FaCog className="mr-3" /> Settings
          </a>
          <a href="#" className="flex items-center p-4 hover:bg-gray-700">
            <FaUser className="mr-3" /> Profile
          </a>
        </nav>
      </div>
      <div className="p-4">
        <a href="#" className="flex items-center p-4 hover:bg-gray-700">
          <FaSignOutAlt className="mr-3" /> Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;