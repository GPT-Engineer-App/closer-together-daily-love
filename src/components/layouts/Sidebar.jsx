import React from 'react';
import { FaTachometerAlt, FaTasks, FaBook, FaBullseye, FaCog, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-800 text-white w-64">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      <nav className="flex-1 px-4 py-8">
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center text-lg">
              <FaTachometerAlt className="mr-3" /> Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-lg">
              <FaTasks className="mr-3" /> Daily Tasks
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-lg">
              <FaBook className="mr-3" /> Journal
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-lg">
              <FaBullseye className="mr-3" /> Goals
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-lg">
              <FaCog className="mr-3" /> Settings
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-lg">
              <FaUser className="mr-3" /> Profile
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-center h-20 border-t border-gray-700">
        <a href="#" className="flex items-center text-lg">
          <FaSignOutAlt className="mr-3" /> Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;