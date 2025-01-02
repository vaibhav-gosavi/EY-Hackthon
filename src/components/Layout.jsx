import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import CareerCoPilot from './CareerCoPilot';

export default function Layout() {
  const [isCoPilotVisible, setIsCoPilotVisible] = useState(true); // State to toggle CareerCoPilot visibility

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-grow p-6 md:ml-64">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* CareerCoPilot */}
      {isCoPilotVisible && (
        <div className="fixed bottom-4 right-4">
          <CareerCoPilot />
        </div>
      )}

      {/* Toggle Button for CareerCoPilot */}
      <button
        onClick={() => setIsCoPilotVisible((prev) => !prev)}
        className="fixed bottom-20 right-4 p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg transition"
      >
        {isCoPilotVisible ? 'Hide CoPilot' : 'Show CoPilot'}
      </button>
    </div>
  );
}
