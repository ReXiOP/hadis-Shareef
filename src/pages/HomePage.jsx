import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hadithBooks from '../assets/json/hadith_books.json';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(hadithBooks); // Load books from the JSON file
  }, []);

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-semibold text-center text-indigo-800 mb-10">Hadith Books</h1>
      
      {/* Grid Layout for Book Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <div key={book.Id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:border-l-4 hover:border-teal-500">
            {/* Book Image */}
            <img
            //   src={ 'https://picsum.photos/150/200?grayscale&blur=2'}
                src={book.ImageUrl || 'https://picsum.photos/150/200?grayscale&blur=2'}
              alt={book.Title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              {/* Book Title */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{book.Title}</h2>
              {/* Book Description */}
              <p className="text-gray-700 mb-4">{book.Description || 'No description available'}</p>
              {/* View Chapters Link */}
              <Link
                to={`/book/${book.Id}`}
                className="inline-block bg-teal-500 text-white px-5 py-2 rounded-md transition-all hover:bg-teal-600 hover:scale-105"
              >
                View Chapters
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
