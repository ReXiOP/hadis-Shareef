// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white text-center p-6 mt-12 shadow-md">
      <p className="text-sm opacity-75">© 2025 Hadith Shareef Website</p>
      <div className="mt-4">
        <a href="https://sajid09.netlify.app/" className="text-white mx-2 hover:text-teal-300 transition-all">Portfolio</a>
        <a href="https://www.linkedin.com/in/muhammad-sajid-4b3385222/" className="text-white mx-2 hover:text-teal-300 transition-all">LinkedIn</a>
        <a href="https://github.com/ReXiOP" className="text-white mx-2 hover:text-teal-300 transition-all">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
