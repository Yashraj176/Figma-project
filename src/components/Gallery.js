import React, { useRef, useState } from 'react';


const Gallery = () => {
  const [images, setImages] = useState([
    'abstract.png',
    'abstract.png',
    'abstract.png',
  ]);
  const galleryRef = useRef(null);

  // Function to add a new image to the gallery
  const addImage = () => {
    setImages([...images, 'abstract.png']);
  };

  // Function to scroll the gallery to the left
  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -150, behavior: 'smooth' });
  };

  // Function to scroll the gallery to the right
  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 150, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-800 .hover:scale-110 p-6 rounded-lg shadow-lg border border-gray-700">
      <div className="py-2 rounded-lg font-medium text-sm transition-all duration-200 ease-in-out flex justify-between items-center mb-5 relative">
        <h3 className="font-poppins py-2 px-5 rounded-lg font-medium text-sm transition-all duration-200 ease-in-out px-4 py-2 bg-gray-900 rounded-full text-white text-sm shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600">Gallery</h3>
        <div className="py-2 px-5 rounded-lg font-medium text-sm transition-all duration-200 ease-in-out flex items-center space-x-2 absolute right-0 ">
          <button
            className="font-poppins px-4 py-2 bg-gray-900 rounded-full text-white text-sm shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600"
            onClick={addImage}
          >
            + Add Image
          </button>
          <button
            className="px-2 py-1 bg-gray-900 rounded-full text-white text-sm shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600"
            onClick={scrollLeft}
          >
            ←
          </button>
          <button
            className="px-2 py-1 bg-gray-900 rounded-full text-white text-sm shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600"
            onClick={scrollRight}
          >
            →
          </button>
        </div>
      </div>
      <div
        ref={galleryRef}
        className="flex flex-row space-x-4 overflow-hidden items-center pb-2"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Item ${index + 1}`}
            className="w-32 h-32 object-cover rounded-lg shadow-sm border border-gray-600 hover:scale-110 transition-shadow duration-300 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
