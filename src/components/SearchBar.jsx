import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex flex-col justify-center items-center my-8 p-4">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by book name, topic, or keyword"
        value={query}
        onChange={handleChange}
        className="p-4 border border-gray-300 rounded-lg w-3/4 lg:w-1/2 xl:w-1/3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg transition-all duration-300 ease-in-out shadow-md placeholder-gray-400 font-sans"
        style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }} // Added font for Banglish support
      />
      
      {/* Search button */}
      <button
        onClick={handleSearch}
        className="mt-4 p-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 ease-in-out shadow-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
