import React from 'react';
import Sidebar from '../components/layouts/Sidebar';

const Index = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="relative">
            <img src="/placeholder.svg" alt="User Avatar" className="mx-auto object-cover w-10 h-10 rounded-full" />
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg hidden">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 overflow-y-auto">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
            <div className="bg-gray-100 p-4 rounded-lg">Content goes here...</div>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Daily Tasks List</h2>
            <div className="bg-gray-100 p-4 rounded-lg">Content goes here...</div>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Journal Entries</h2>
            <div className="bg-gray-100 p-4 rounded-lg">Content goes here...</div>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Goals Progress</h2>
            <div className="bg-gray-100 p-4 rounded-lg">Content goes here...</div>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Settings Options</h2>
            <div className="bg-gray-100 p-4 rounded-lg">Content goes here...</div>
          </section>
        </main>
        <footer className="bg-white shadow p-4 text-center">
          © 2023 Closer Together. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Index;