import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import hadithBooks from '../assets/json/hadith_books.json';
import hadithChapters from '../assets/json/hadith_chapters.json';

const BookPage = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const selectedBook = hadithBooks.find((book) => book.Id === parseInt(id)); // Find the book by ID
    setBook(selectedBook);

    // Find the chapters for the selected book
    const chaptersForBook = hadithChapters.find((chapter) => chapter.BookId === parseInt(id));

    // Ensure 'Chapters' exists and is an object with a 'Data' array
    if (chaptersForBook && chaptersForBook.Chapters && Array.isArray(chaptersForBook.Chapters.Data)) {
      setChapters(chaptersForBook.Chapters.Data); // Set chapters as an array
    } else {
      setChapters([]); // If no chapters found, set chapters to an empty array
    }
  }, [id]);

  if (!book) return <div>Loading book...</div>;

  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-semibold text-center text-indigo-600 mb-10">{book.Title}</h1>
      <p className="text-center text-lg text-gray-700 mb-8">{book.ArabicTitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {chapters.length === 0 ? (
          <div className="text-center text-xl text-gray-600">No chapters found for this book.</div>
        ) : (
          chapters.map((chapter) => (
            <div key={chapter.Id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{chapter.Name}</h3>
                <Link
                  to={`/${book.Name.toLowerCase()}/${chapter.ChapterNo}`} // Use book.Name and chapter.ChapterNo
                  className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-md transition-all hover:bg-indigo-700 hover:scale-105"
                >
                  Read Chapter
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookPage;
