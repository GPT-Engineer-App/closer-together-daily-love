import React from 'react';
import Sidebar from './components/layouts/Sidebar';
import Index from './pages/Index';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-200">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="relative">
            <img src="/placeholder.svg" alt="User Avatar" className="mx-auto object-cover w-10 h-10 rounded-full" />
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
            </div>
          </div>
        </header>
        <main className="flex-1 p-4">
          <Index />
        </main>
        <footer className="p-4 bg-gray-100 border-t border-gray-200 text-center">
          © 2023 Closer Together. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;