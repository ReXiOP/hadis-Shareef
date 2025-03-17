import React, { useState } from "react";
import { Link } from "react-router-dom";
import booksData from "../assets/json/hadith_books.json";
import chaptersData from "../assets/json/hadith_chapters.json";

// Banglish to Bengali transliteration function (basic mapping)
const transliterateBanglishToBengali = (banglishText) => {
  const mapping = {
    // Consonants
    "sh": "শ", "s": "স", "kh": "খ", "k": "ক", "g": "গ", "gh": "ঘ",
    "ch": "চ", "j": "জ", "jh": "ঝ", "t": "ত", "th": "থ", "d": "দ", "dh": "ধ",
    "n": "ন", "p": "প", "ph": "ফ", "b": "ব", "bh": "ভ", "m": "ম",
    "y": "য", "r": "র", "l": "ল", "v": "ভ", "h": "হ", "ng": "ং", "z": "য",
    "w": "ও", "x": "ক্স", "c": "স", "f": "ফ", "q": "ক","j": "জ", "z": "য","x": "ক্স","v": "ভ","b": "ব","g": "গ","d": "দ","h": "হ",
    "k": "ক","l": "ল","m": "ম","n": "ন","p": "প","r": "র","s": "স","t": "ত","y": "য","a": "আ","i": "ই","u": "উ","e": "এ","o": "ও",
    "aa": "আ","ee": "ঈ","oo": "ঊ","ai": "ঐ","au": "ঔ","oi": "ঔ","ou": "ও","ui": "ঊ","eu": "ঐ","iu": "ঈ","h": "হ","sh": "শ","kh": "খ",
    "ha": "হা", "sa": "সা", "ka": "কা", "ga": "গা", "gha": "ঘা", "cha": "চা", "ja": "জা", "jha": "ঝা", "ta": "তা", "tha": "থা", "da": "দা",

    // Vowels
    "aa": "আ", "a": "অ", "i": "ই", "ee": "ঈ", "u": "উ", "oo": "ঊ", "e": "এ", "o": "ও",
    "ai": "ঐ", "au": "ঔ", "ei": "ঈ", "oi": "ঔ", "ou": "ও", "ui": "ঊ", "eu": "ঐ", "iu": "ঈ",

    // Diphthongs
    "ia": "ইয়া", "oa": "ওয়া", "ya": "ইয়া", "ua": "উয়া", "ei": "ঈ", "oi": "ঔ", 
    "ou": "ও", "ui": "ঊ", "eu": "ঐ", "iu": "ঈ",

    // Vowel extensions and accents
    "i": "ই", "u": "উ", "ee": "ঈ", "oo": "ঊ", "a": "অ", "e": "এ", "o": "ও", "aa": "আ",

    // Bengali accent modifications
    "ng": "ং", "tn": "ট্ন", "hn": "হ্ন", "dhn": "ধ্ন", "sn": "স্ন", "bn": "ব্ন", 
    "mn": "ম্ন", "gn": "গ্ন", "phn": "ফ্ন", "y": "য", "rh": "রহ", "thn": "থ্ন",
    
    // Ending sounds
    "tto": "ত্ত", "t": "ত", "tt": "ত", "rra": "র্র", "r": "র", "rr": "র", "gn": "গ্ণ", "gn": "ণ",

    // More suffixes and common words
    "er": "এর", "e": "এ", "r": "র", "ng": "ং", "ra": "রা", "la": "লা", "ke": "কে", "ne": "নে",
    "bo": "বো", "cho": "চো", "du": "দু", "duro": "দূর", "jore": "জোড়", "er": "এর", "ni": "নি", 
    "ho": "হো", "shom": "সম", "bari": "বাড়ি", "dui": "দুই", "chhobi": "ছবি", "baba": "বাবা",
    
    // Common Banglish words
    "korbo": "করবো", "jabe": "যাবে", "ashbe": "আশবে", "khao": "খাও", "khabo": "খাবো",
    "bhalobashi": "ভালোবাসি", "shundor": "সুন্দর", "mone": "মনে", "hobe": "হবে", "thik": "ঠিক",
    "amra": "আমরা", "tumi": "তুমি", "o": "ও", "kemon": "কেমন", "kichu": "কিছু", "chinta": "চিন্তা",
    "shikha": "শিক্ষা", "chole": "চলে", "kothai": "কোথায়", "dorkar": "দরকার", "puro": "পুরো",

    // More specific
    "purobi": "পূর্বী", "darun": "দারুণ", "koira": "কইরা", "ghor": "ঘর", "poth": "পথ",
    "hoye": "হয়ে", "dukkho": "দুঃখ", "kisu": "কিছু", "shorot": "শরৎ",
  };

  // Replace the Banglish text with Bengali using the mapping
  return banglishText.replace(/sh|kh|gh|ch|jh|th|dh|ph|bh|ng|aa|ee|oo|ai|au|ei|oi|ou|ui|eu|iu|ia|oa|ya|ua|[a-z]/g, (match) => mapping[match] || match);
};

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [filteredChapters, setFilteredChapters] = useState([]);

  const handleSearch = (e) => {
    let query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredBooks(booksData);
      setFilteredChapters([]);
      return;
    }

    // Convert Banglish input to Bengali
    const banglishToBengali = transliterateBanglishToBengali(query);

    const filteredBookResults = booksData.filter(
      (book) =>
        book.Title.toLowerCase().includes(query) ||  // English search
        book.ArabicTitle.toLowerCase().includes(query) || // Arabic title search
        book.Name.includes(query) || // Any name field
        book.Title.includes(banglishToBengali) // Banglish -> Bengali search
    );

    const filteredChapterResults = chaptersData.flatMap((book) =>
      book.Chapters.Data.filter((chapter) =>
        chapter.Name.toLowerCase().includes(query) || // English search
        chapter.Name.includes(banglishToBengali) // Banglish -> Bengali search
      ).map((chapter) => ({
        ...chapter,
        BookTitle: book.BookTitle,
      }))
    );

    setFilteredBooks(filteredBookResults);
    setFilteredChapters(filteredChapterResults);
  };

  // Function to format book name for the URL
  const formatBookNameForUrl = (bookName) => {
    return bookName.toLowerCase().replace(/\s+/g, "-"); // Replace spaces with hyphens and convert to lowercase
  };

  // Function to get the book name from booksData by matching BookId
  const getBookNameById = (bookId) => {
    const book = booksData.find((book) => book.Id === bookId);
    return book ? book.Name : "";
  };

  return (
    <div className="container mx-auto p-6">
      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for books or chapters..."
        className="p-4 border border-gray-300 rounded-lg w-full md:w-2/3 lg:w-1/2 xl:w-1/3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg placeholder-gray-400 transition duration-300 ease-in-out font-sans"
        style={{ fontFamily: "Noto Sans Bengali, sans-serif" }}
      />

      {/* Books Section */}
      {filteredBooks.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-teal-700 mb-3">📚 Books</h2>
          {filteredBooks.map((book) => (
            <div
              key={book.Id}
              className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg mb-4 transition-shadow duration-300 ease-in-out"
            >
              <Link
                to={`/${formatBookNameForUrl(book.Name)}`}  // Removed '/book'
                className="text-xl font-semibold text-teal-600 hover:text-teal-800 transition duration-300 ease-in-out"
              >
                {book.Title}
              </Link>
              <p className="mt-2 text-gray-600">{book.ArabicTitle}</p>
            </div>
          ))}
        </div>
      )}

      {/* Chapters Section */}
      {filteredChapters.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-teal-700 mb-3">📖 Chapters</h2>
          {filteredChapters.map((chapter) => {
            const bookName = getBookNameById(chapter.BookId); // Get book name for the chapter
            return (
              <div
                key={chapter.Id}
                className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg mb-4 transition-shadow duration-300 ease-in-out"
              >
                <Link
                  to={`/${formatBookNameForUrl(bookName)}/${chapter.ChapterNo}`}  // Removed '/book'
                  className="text-xl font-semibold text-teal-600 hover:text-teal-800 transition duration-300 ease-in-out"
                >
                  {chapter.Name}
                </Link>
                <p className="mt-2 text-gray-500">📕 {bookName}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* No Results Message */}
      {filteredBooks.length === 0 && filteredChapters.length === 0 && searchQuery && (
        <p className="text-center text-lg text-gray-500">
          No books or chapters found. Please try another search.
        </p>
      )}
    </div>
  );
};

export default SearchPage;
