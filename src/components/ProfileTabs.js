import React, { useState } from 'react';
import '../styles.css';



const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' },
  ];

  return (  
    <div className="bg-gray-800 p-6 rounded-lg mb-8 shadow-lg border border-gray-700">
      <div className="flex space-x-4 items-center mb-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`font-poppins py-2 px-5 rounded-lg font-medium text-sm transition-all duration-200 ease-in-out ${
              activeTab === tab.id
                ? 'font-poppins px-4 py-2 bg-gray-900 rounded-full text-white text-sm shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600'
                : 'font-poppins px-4 py-2 bg-gray-900 rounded-full text-white text-sm shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-5 bg-gray-700 rounded-lg text-sm text-gray-300 border border-gray-600">
        {activeTab === 'about' && (
          <p class="font-plus jakarta sans text-lg text-gray-400 h-32 overflow-y-auto scrollbar-line">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            <br></br>
            <br></br>
            I was born and raised in Albany, NY& have been living in Santa<br></br> 
            Carla for the past 10 years of my wife Tiffany and my 4 year old twin<br></br> 
            daughters- Emma and Ella. Both of them are just starting school,<br></br>
            so my calender is usually blocked between 9-10 AM. This is a...                        
          </p>
        )}
        {activeTab === 'experience' && <p class="font-plus jakarta sans text-lg text-gray-400">Experience content goes here...</p>}
        {activeTab === 'recommended' && <p class="font-plus jakarta sans text-lg text-gray-400">Recommended content goes here...</p>}
      </div>
    </div>
  );
};

export default ProfileTabs;
