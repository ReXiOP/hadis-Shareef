import React from 'react';

const Header = () => {
  return (
    <header className="bg-teal-600 p-6 text-white text-center shadow-md">
      <h1 className="text-3xl font-bold">Hadith Shareef</h1>
      <nav>
        <ul className="flex justify-center gap-8 mt-4">
          <li className="flex items-center gap-2 text-lg hover:text-teal-300 transition-all">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
            </svg>

            <a href="/" className="hover:text-teal-200 transition-all">Home</a>
          </li>
          <li className="flex items-center gap-2 text-lg hover:text-teal-300 transition-all">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>

            <a href="/search" className="hover:text-teal-200 transition-all">Search</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
