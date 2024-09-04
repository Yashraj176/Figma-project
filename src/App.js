import React from 'react';
import ProfileTabs from './components/ProfileTabs';
import Gallery from './components/Gallery';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex bg-gray-900 text-gray-100 p-6">
      <div className="flex-1"></div> {/* Empty left half */}
      <div className="flex-1 max-w-2xl">
        <ProfileTabs />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
