import React from 'react';

function Home() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Bagian Teks */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Welcome to Prioritas Group
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We offer a wide range of high-quality services and products to meet all your needs. 
            Our expertise and dedication ensure your satisfaction.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Learn More
          </button>
        </div>

        {/* Bagian Gambar */}
        <div className="flex justify-center">
          <img src="/vite.svg" alt="Hero illustration" className="w-3/4 md:w-full" />
        </div>
      </div>
    </div>
  );
}

export default Home;
