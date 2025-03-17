import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import sahih_bukhari from "../assets/json/সহিহ_বুখারী_hadith_data.json";
import sahih_muslim from "../assets/json/সহিহ_মুসলিম_hadith_data.json";
import nasai from "../assets/json/সুনানে_আন-নাসায়ী_hadith_data";
import upodesh from "../assets/json/ঊপদেশ_hadith_data";
import abu_dawud from "../assets/json/সুনানে_আবু_দাউদ_hadith_data";

const hadithBooks = {
  bukhari: sahih_bukhari,
  muslim: sahih_muslim,
  nasai: nasai,
  upodesh: upodesh,
  abu_dawud: abu_dawud,
};

// Function to convert English numbers to Bangla numbers
const convertToBanglaNumber = (num) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .split("")
    .map((digit) => banglaDigits[parseInt(digit)])
    .join("");
};

const ChapterPage = () => {
  const { book_name, id } = useParams();
  const selectedBook = useMemo(() => hadithBooks[book_name], [book_name]);
  
  const hadiths = useMemo(() => {
    if (!selectedBook) return [];
    return selectedBook.filter((hadith) => hadith.ChapterNo.toString() === id.toString());
  }, [selectedBook, id]);

  const error = !selectedBook ? "Book not found" : hadiths.length === 0 ? "No Hadiths found in this chapter." : "";

  const handleBack = () => window.history.back();

  if (error) {
    return (
      <div className="text-center text-xl font-bold py-8">
        {error}
        <div className="mt-4">
          <button onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
            ← Back
          </button>
        </div>
      </div>
    );
  }

  const hadithList = useMemo(() => hadiths.map((hadith, index) => (
    <div key={hadith.HadithNumber || index} className="relative bg-white shadow-md rounded-lg p-5 border-l-4 border-teal-600">
      
      {/* Hadith Number in top left corner */}
      {hadith.HadithNumber && (
        <span className="absolute top-2 left-2 bg-sky-200 text-teal-800 px-3 py-1 rounded-lg text-sm font-semibold z-10">
          হাদিস {convertToBanglaNumber(hadith.HadithNumber)}
        </span>
      )}

      {/* Add padding-top to ensure it doesn't overlap Arabic text */}
      <div className="pt-10">
        {hadith.HadithArabicText && <p className="text-lg text-oklch(0.216 0.006 56.043)-500 mb-2 font-semibold">{hadith.HadithArabicText}</p>}
        <p className="text-sm font-small text-gray-800">{hadith.HadithText}</p>
      </div>
    </div>
  )), [hadiths]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Hadiths from Chapter {id} of {book_name}
      </h1>

      <div className="mb-4">
        <button onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
          ← Back
        </button>
      </div>

      <div className="space-y-6">{hadithList}</div>

      <div className="text-center mt-6">
        <Link to="/" className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default React.memo(ChapterPage);
