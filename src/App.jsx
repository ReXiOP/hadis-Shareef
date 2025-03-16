import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import BookPage from './pages/BookPage';
import ChapterPage from './pages/ChapterPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/book/:id" element={<BookPage />} />
        {/* Correct the dynamic chapter route */}
        <Route path="/:book_name/:id" element={<ChapterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
