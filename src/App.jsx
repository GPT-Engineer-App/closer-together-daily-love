import React from 'react';
import Sidebar from './components/layouts/Sidebar';
import Index from './pages/Index';

const App = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="relative">
            <img src="/placeholder.svg" alt="User Avatar" className="mx-auto object-cover w-10 h-10 rounded-full cursor-pointer" />
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg hidden">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4">
          <Index />
        </main>
        <footer className="bg-white shadow p-4 text-center">
          © 2023 Closer Together. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;