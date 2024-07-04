import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Header = ({ title }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 shadow-md">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="relative">
        <FaUserCircle className="text-3xl cursor-pointer" />
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <ul>
            <li className="p-2 cursor-pointer hover:bg-gray-200">Profile</li>
            <li className="p-2 cursor-pointer hover:bg-gray-200">Settings</li>
            <li className="p-2 cursor-pointer hover:bg-gray-200">Logout</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;