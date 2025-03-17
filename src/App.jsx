import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const HomePage = lazy(() => import("./pages/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const BookPage = lazy(() => import("./pages/BookPage"));
const ChapterPage = lazy(() => import("./pages/ChapterPage"));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div className="text-center text-xl">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/:book_name/:id" element={<ChapterPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
