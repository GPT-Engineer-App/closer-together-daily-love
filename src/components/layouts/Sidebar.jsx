import React from 'react';
import { FaHome, FaTasks, FaBook, FaBullseye, FaCog, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-800 text-white w-64">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Closer Together</h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        <a href="#" className="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700">
          <FaHome className="mr-3" /> Dashboard
        </a>
        <a href="#" className="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700">
          <FaTasks className="mr-3" /> Daily Tasks
        </a>
        <a href="#" className="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700">
          <FaBook className="mr-3" /> Journal
        </a>
        <a href="#" className="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700">
          <FaBullseye className="mr-3" /> Goals
        </a>
        <a href="#" className="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700">
          <FaCog className="mr-3" /> Settings
        </a>
        <a href="#" className="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700">
          <FaUser className="mr-3" /> Profile
        </a>
      </nav>
      <div className="flex-shrink-0 px-2 py-4">
        <a href="#" className="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700">
          <FaSignOutAlt className="mr-3" /> Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;