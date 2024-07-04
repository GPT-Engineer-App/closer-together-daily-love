import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Header = ({ title }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 shadow">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="relative">
        <FaUserCircle className="text-3xl cursor-pointer" />
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg hidden">
          <button className="block w-full text-left px-4 py-2">Profile</button>
          <button className="block w-full text-left px-4 py-2">Settings</button>
          <button className="block w-full text-left px-4 py-2">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;