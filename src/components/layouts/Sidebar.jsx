import React from 'react';
import { FaHome, FaTasks, FaBook, FaBullseye, FaCog, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ currentSection, onSectionChange }) => {
  const navItems = [
    { name: 'Dashboard', icon: <FaHome />, section: 'dashboard' },
    { name: 'Daily Tasks', icon: <FaTasks />, section: 'daily-tasks' },
    { name: 'Journal', icon: <FaBook />, section: 'journal' },
    { name: 'Goals', icon: <FaBullseye />, section: 'goals' },
    { name: 'Settings', icon: <FaCog />, section: 'settings' },
    { name: 'Profile', icon: <FaUser />, section: 'profile' },
  ];

  return (
    <div className="h-full flex flex-col bg-gray-800 text-white">
      <div className="p-4">
        <img src="/placeholder.svg" alt="logo" className="mx-auto object-cover w-24 h-24" />
      </div>
      <nav className="flex-1">
        {navItems.map((item) => (
          <button
            key={item.section}
            className={`flex items-center p-4 w-full text-left ${currentSection === item.section ? 'bg-gray-700' : ''}`}
            onClick={() => onSectionChange(item.section)}
          >
            {item.icon}
            <span className="ml-4">{item.name}</span>
          </button>
        ))}
      </nav>
      <button className="flex items-center p-4 w-full text-left mt-auto bg-red-600">
        <FaSignOutAlt />
        <span className="ml-4">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;