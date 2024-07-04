import React, { useState } from 'react';
import Sidebar from '../components/layouts/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('Dashboard');

  const renderContent = () => {
    switch (currentSection) {
      case 'Dashboard':
        return <div className="p-4">Dashboard Overview</div>;
      case 'Daily Tasks':
        return <div className="p-4">Daily Tasks List</div>;
      case 'Journal':
        return <div className="p-4">Journal Entries</div>;
      case 'Goals':
        return <div className="p-4">Goals Progress</div>;
      case 'Settings':
        return <div className="p-4">Settings Options</div>;
      case 'Profile':
        return <div className="p-4">Profile Information</div>;
      default:
        return <div className="p-4">Dashboard Overview</div>;
    }
  };

  return (
    <div className="flex">
      <Sidebar currentSection={currentSection} onSectionChange={setCurrentSection} />
      <div className="flex flex-col flex-grow">
        <Header title={currentSection} />
        <main className="flex-grow p-4">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;