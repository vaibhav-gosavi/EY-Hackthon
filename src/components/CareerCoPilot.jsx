import React, { useState } from 'react';
import { Send, Mic } from 'lucide-react';

const CareerCoPilot = () => {
  const [message, setMessage] = useState('');

  return (
    <div
      className="fixed bottom-4 md:right-4 right-2 w-full md:w-96 max-h-[500px] bg-white rounded-2xl shadow-xl flex flex-col z-50"
    >
      <div className="p-4 border-b bg-indigo-600 rounded-t-2xl">
        <h3 className="text-lg font-semibold text-white">Career Co-Pilot</h3>
        <p className="text-sm text-indigo-100">Your 24/7 career guidance companion</p>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        <div className="bg-indigo-50 p-3 rounded-lg rounded-tl-none max-w-[80%]">
          <p className="text-sm">
            Hello! I'm your Career Co-Pilot. How can I help you today?
          </p>
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 rounded-full border focus:ring-2 focus:ring-indigo-500"
          />
          <button className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700">
            <Mic className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerCoPilot;
