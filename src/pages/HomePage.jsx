import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hadithBooks from '../assets/json/hadith_books.json';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const convertToBanglaNumber = (num) => {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num
      .toString()
      .split("")
      .map((digit) => banglaDigits[parseInt(digit)])
      .join("");
  };
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
            {/* Professional SVG with Book Title */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" className="w-full h-40 object-cover">
              <path d="M90.568 246.837 59.2 276.718V46.483C59.305 28.439 71.44 12.073 90.568 10z" style={{ fill: '#0167F7FF' }}/>
              <path d="M89.929 308.327A30.746 30.746 0 0 1 59.2 276.718c.46-16.747 13.379-29.881 31.373-29.881h190.244v8.494a7.644 7.644 0 0 1-7.645 7.644H90.364c-20.68.573-21.166 29.977-.435 30.858h183.243a7.644 7.644 0 0 1 7.645 7.644v6.85z" style={{ fill: '#4e73a8' }}/>
              <path d="M90.568 246.837V10H259.72a21.1 21.1 0 0 1 21.1 21.1v215.74z" style={{ fill: '#88b0ea' }}/>
              <path d="M261.46 274.337H94.74a3.25 3.25 0 0 0 0 6.49h166.72z" style={{ fill: '#c9d4ff' }}/>
              <path style={{ fill: '#c9d4ff' }} d="M99.877 274.337h31.033v19.496H99.877z"/>
              <path style={{ fill: '#f47676' }} d="M109.312 274.337v52.418l21.598-10.012 21.599 10.012v-52.418h-43.197z"/>
              {/* Book Title inside the SVG */}
              <text 
                x="50%" 
                y="50%" 
                textAnchor="middle" 
                dominantBaseline="middle" 
                fill="#383a49" 
                fontSize="19" 
                fontWeight="bold" 
                style={{ whiteSpace: 'pre-line', lineHeight: '1.2em', wordWrap: 'break-word', maxWidth: '80%' }}
              >
                {book.Title}
              </text>
            </svg>
            <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{book.Title}</h3>
              {/* Book Description */}
              {/* <p className="text-gray-700 mb-4">
                {book.Description || 'No description available'}
              </p> */}
              {/* Total Hadith */}
              <p className="text-sm text-gray-600 mb-4">
              {convertToBanglaNumber(book.TotalHadith)}<strong> হাদিস </strong>
              </p>
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
