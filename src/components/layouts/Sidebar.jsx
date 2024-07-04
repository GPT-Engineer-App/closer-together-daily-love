import React, { useState } from 'react';
import { FaHome, FaTasks, FaBook, FaBullseye, FaCog, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ currentSection, onSectionChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSectionChange = (section) => {
    onSectionChange(section);
  };

  return (
    <div className={`h-screen bg-gray-800 text-white ${isCollapsed ? 'w-20' : 'w-64'} transition-width duration-300`}>
      <div className="flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Logo</div>
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? '>' : '<'}
        </button>
      </div>
      <nav className="mt-10">
        <ul>
          <li className={`p-4 cursor-pointer ${currentSection === 'Dashboard' ? 'bg-gray-700' : ''}`} onClick={() => handleSectionChange('Dashboard')}>
            <FaHome className="inline-block mr-2" /> {!isCollapsed && 'Dashboard'}
          </li>
          <li className={`p-4 cursor-pointer ${currentSection === 'Daily Tasks' ? 'bg-gray-700' : ''}`} onClick={() => handleSectionChange('Daily Tasks')}>
            <FaTasks className="inline-block mr-2" /> {!isCollapsed && 'Daily Tasks'}
          </li>
          <li className={`p-4 cursor-pointer ${currentSection === 'Journal' ? 'bg-gray-700' : ''}`} onClick={() => handleSectionChange('Journal')}>
            <FaBook className="inline-block mr-2" /> {!isCollapsed && 'Journal'}
          </li>
          <li className={`p-4 cursor-pointer ${currentSection === 'Goals' ? 'bg-gray-700' : ''}`} onClick={() => handleSectionChange('Goals')}>
            <FaBullseye className="inline-block mr-2" /> {!isCollapsed && 'Goals'}
          </li>
          <li className={`p-4 cursor-pointer ${currentSection === 'Settings' ? 'bg-gray-700' : ''}`} onClick={() => handleSectionChange('Settings')}>
            <FaCog className="inline-block mr-2" /> {!isCollapsed && 'Settings'}
          </li>
          <li className={`p-4 cursor-pointer ${currentSection === 'Profile' ? 'bg-gray-700' : ''}`} onClick={() => handleSectionChange('Profile')}>
            <FaUser className="inline-block mr-2" /> {!isCollapsed && 'Profile'}
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-0 w-full p-4 cursor-pointer" onClick={() => handleSectionChange('Logout')}>
        <FaSignOutAlt className="inline-block mr-2" /> {!isCollapsed && 'Logout'}
      </div>
    </div>
  );
};

export default Sidebar;