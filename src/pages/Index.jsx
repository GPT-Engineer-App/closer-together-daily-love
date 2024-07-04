import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const renderContent = () => {
    switch (currentSection) {
      case 'dashboard':
        return <div>Dashboard Overview</div>;
      case 'daily-tasks':
        return <div>Daily Tasks List</div>;
      case 'journal':
        return <div>Journal Entries</div>;
      case 'goals':
        return <div>Goals Progress</div>;
      case 'settings':
        return <div>Settings Options</div>;
      case 'profile':
        return <div>Profile Information</div>;
      default:
        return <div>Dashboard Overview</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar currentSection={currentSection} onSectionChange={setCurrentSection} />
      <div className="flex flex-col flex-1">
        <Header title={currentSection.replace('-', ' ')} />
        <main className="flex-1 p-4 overflow-auto">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;