import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Import Hadith JSON files
import sahih_bukhari from "../assets/json/সহিহ_বুখারী_hadith_data.json";
import sahih_muslim from "../assets/json/সহিহ_মুসলিম_hadith_data.json";

// Store them in an object for easy lookup by book name
const hadithBooks = {
  "bukhari": sahih_bukhari,
  "muslim": sahih_muslim,
};

const ChapterPage = () => {
  const { book_name, id } = useParams(); // Extract book_name and id from URL
  const [hadiths, setHadiths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    // Get the selected book data based on the book_name parameter
    const selectedBook = hadithBooks[book_name];

    // Check if the book data exists
    if (!selectedBook) {
      setError("Book not found");
      setLoading(false);
      return;
    }

    // Filter Hadiths by the given chapter number (id)
    const chapterData = selectedBook.filter(
      (hadith) => hadith.ChapterNo.toString() === id.toString()
    );

    // Check if Hadiths exist in the chapter
    if (chapterData.length === 0) {
      setError("No Hadiths found in this chapter.");
    } else {
      setHadiths(chapterData);
    }

    setLoading(false);
  }, [book_name, id]); // Re-fetch when book_name or id changes

  // Handle back button click
  const handleBack = () => {
    window.history.back(); // Go to the previous page
  };

  if (loading)
    return (
      <div className="text-center text-xl font-bold py-8">Loading...</div>
    );

  if (error) {
    return (
      <div className="text-center text-xl font-bold py-8">
        {error}
        <div className="mt-4">
          <button
            onClick={handleBack}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Hadiths from Chapter {id} of {book_name}
      </h1>

      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={handleBack}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
        >
          ← Back
        </button>
      </div>

      <div className="space-y-6">
        {hadiths.map((hadith, index) => (
          <div
            key={hadith.HadithNumber || index}
            className="bg-white shadow-md rounded-lg p-5 border-l-4 border-teal-600"
          >
            {hadith.HadithArabicText && (
              <p className="text-sm text-gray-500 mb-2">
                {hadith.HadithArabicText}
              </p>
            )}
            <p className="text-lg font-medium text-gray-800">
              {hadith.HadithText}
            </p>
          </div>
        ))}
      </div>

      {/* Back to Home */}
      <div className="text-center mt-6">
        <Link
          to="/"
          className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ChapterPage;
