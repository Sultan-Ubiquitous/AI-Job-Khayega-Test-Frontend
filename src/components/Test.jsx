'use client';
import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';





const CodePreviewPage = () => {
  const [code, setCode] = useState(`
// Edit this code to see live changes!
function Demo() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Counter: {count}</h2>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(prev => prev + 1)}
      >
        Increment
      </button>
    </div>
  );
}
  `);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Live Code Preview</h1>
      
      {/* Code Input Section */}
      <div className="mb-8">
        <h2 className="text-xl mb-4">Edit Code:</h2>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-64 p-4 font-mono text-sm bg-gray-50 border rounded-lg"
          placeholder="Enter your React component code here..."
        />
      </div>

      {/* Live Preview Section */}
      <div className="space-y-6">
        <h2 className="text-xl">Preview:</h2>
        <LiveProvider 
          code={code}
          scope={{ 
            useState,
            // Add any other necessary imports here
          }}
        >
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 bg-gray-50 border-b">
              <LivePreview />
            </div>
            
            <div className="p-4 bg-red-50">
              <LiveError />
            </div>
          </div>
        </LiveProvider>
      </div>
    </div>
  );
};

export default CodePreviewPage;