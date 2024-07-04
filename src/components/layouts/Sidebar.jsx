import React from 'react';
import { FaHome, FaTasks, FaBook, FaBullseye, FaCog, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ currentSection, onSectionChange }) => {
  const sections = [
    { name: 'Dashboard', icon: <FaHome /> },
    { name: 'Daily Tasks', icon: <FaTasks /> },
    { name: 'Journal', icon: <FaBook /> },
    { name: 'Goals', icon: <FaBullseye /> },
    { name: 'Settings', icon: <FaCog /> },
    { name: 'Profile', icon: <FaUser /> },
  ];

  return (
    <div className="h-full flex flex-col bg-gray-800 text-white">
      <div className="p-4">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-24 h-24" />
      </div>
      <nav className="flex-1">
        {sections.map((section) => (
          <button
            key={section.name}
            className={`w-full p-4 flex items-center space-x-2 hover:bg-gray-700 ${currentSection === section.name ? 'bg-gray-700' : ''}`}
            onClick={() => onSectionChange(section.name)}
          >
            {section.icon}
            <span>{section.name}</span>
          </button>
        ))}
      </nav>
      <button className="w-full p-4 flex items-center space-x-2 hover:bg-gray-700">
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;