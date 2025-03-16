import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <div key={book.Id} className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{book.Title}</h3>
            <p className="text-lg text-gray-600 mb-4">{book.ArabicTitle}</p>
            <Link
              to={`/book/${book.Id}`}
              className="text-indigo-600 hover:text-indigo-800 font-medium transition-all duration-300"
            >
              View Book
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
