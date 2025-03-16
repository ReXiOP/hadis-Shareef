import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import hadithData from '../assets/json/hadith_data.json'; // Import hadith data

const ChapterPage = () => {
  const { id } = useParams(); // Get chapter number from URL
  const [state, setState] = useState({ data: [], loading: true });

  useEffect(() => {
    setState({ data: [], loading: true }); // Reset state before fetching

    // Convert id to a number and validate it
    const chapterNumber = parseInt(id);
    if (isNaN(chapterNumber)) {
      setState({ data: [], loading: false });
      return;
    }

    // Filter hadiths based on ChapterNo
    const chapterData = hadithData.Data.filter(hadith => hadith.ChapterNo === chapterNumber);
    
    setTimeout(() => { // Simulate loading for better UX
      setState({ data: chapterData, loading: false });
    }, 500);
  }, [id]);

  if (state.loading) return <div className="text-center text-xl font-bold py-8">Loading chapter...</div>;

  if (state.data.length === 0) {
    return (
      <div className="text-center text-xl font-bold py-8">
        No hadiths found for this chapter.
        <div className="mt-4">
          <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Hadiths in Chapter {id}</h1>
      <div className="space-y-6">
        {state.data.map(hadith => (
          <div key={hadith.Id} className="bg-white shadow-md rounded-lg p-5 border-l-4 border-teal-600">
            <p className="text-sm text-gray-500 mb-2">{hadith.HadithArabicText}</p>
            <p className="text-lg font-medium text-gray-800">{hadith.HadithText}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/" className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">Back to Home</Link>
      </div>
    </div>
  );
};

export default ChapterPage;
