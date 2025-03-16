// src/components/HadithCard.jsx
import React from 'react';

const HadithCard = ({ hadith }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-2xl transition-shadow duration-300">
      <h4 className="text-xl font-semibold text-gray-800">Hadith {hadith.HadithNumber}</h4>
      <p className="mt-4 text-lg text-gray-800">{hadith.HadithText}</p>
      {hadith.HadithArabicText && (
        <p className="mt-2 text-gray-700 text-sm">{hadith.HadithArabicText}</p>
      )}
    </div>
  );
};

export default HadithCard;
