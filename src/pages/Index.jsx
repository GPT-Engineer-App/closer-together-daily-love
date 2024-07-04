import React, { useState } from 'react';
import Sidebar from '../components/layouts/Sidebar';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('Dashboard');

  const renderSection = () => {
    switch (currentSection) {
      case 'Dashboard':
        return <div>Dashboard Overview</div>;
      case 'Daily Tasks':
        return <div>Daily Tasks List</div>;
      case 'Journal':
        return <div>Journal Entries</div>;
      case 'Goals':
        return <div>Goals Progress</div>;
      case 'Settings':
        return <div>Settings Options</div>;
      case 'Profile':
        return <div>Profile Information</div>;
      default:
        return <div>Dashboard Overview</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar currentSection={currentSection} onSectionChange={setCurrentSection} />
      <div className="flex-1 flex flex-col">
        <header className="p-4 bg-gray-100 flex justify-between items-center">
          <h1 className="text-xl">{currentSection}</h1>
          <div className="relative">
            <img src="/placeholder.svg" alt="User Avatar" className="mx-auto object-cover w-10 h-10 rounded-full" />
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <button className="w-full p-2 text-left hover:bg-gray-100">Profile</button>
              <button className="w-full p-2 text-left hover:bg-gray-100">Settings</button>
              <button className="w-full p-2 text-left hover:bg-gray-100">Logout</button>
            </div>
          </div>
        </header>
        <main className="flex-1 p-4">
          {renderSection()}
        </main>
        <footer className="p-4 bg-gray-100 text-center">
          © 2023 Closer Together. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Index;