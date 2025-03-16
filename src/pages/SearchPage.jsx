import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import booksData from '../assets/json/hadith_books.json'; // Assuming you're using this for search

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  // Handle both Bengali and English text in search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === '') {
      setFilteredBooks(booksData); // Reset if no search query
    } else {
      setFilteredBooks(
        booksData.filter(book =>
          book.Title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          book.ArabicTitle.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="container mx-auto p-6">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for a book in Banglish or English..."
        className="p-4 border border-gray-300 rounded-lg w-full md:w-2/3 lg:w-1/2 xl:w-1/3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg placeholder-gray-400 transition duration-300 ease-in-out font-sans"
        style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}  // Apply Bengali-friendly font
      />
      <div className="mt-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <div key={book.Id} className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg mb-4 transition-shadow duration-300 ease-in-out">
              <Link
                to={`/book/${book.Id}`}
                className="text-xl font-semibold text-teal-600 hover:text-teal-800 transition duration-300 ease-in-out"
              >
                {book.Title}
              </Link>
              <p className="mt-2 text-gray-600">{book.ArabicTitle}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">No books found. Please try another search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
