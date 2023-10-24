// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page
"use client"

import React, { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom';

const LanguagesContext = createContext();

const languages = ['JavaScript', 'Python'];

function page() {
  const [favoriteLanguage, setFavoriteLanguage] = useState(languages[0]);

  const toggleLanguage = () => {
    const currentLanguageIndex = languages.indexOf(favoriteLanguage);
    const nextLanguageIndex = (currentLanguageIndex + 1) % languages.length;
    setFavoriteLanguage(languages[nextLanguageIndex]);
  };

  return (
    <LanguagesContext.Provider value={{ favoriteLanguage, toggleLanguage }}>
      <MainSection />
    </LanguagesContext.Provider>
  );
}

function MainSection() {
  const { favoriteLanguage, toggleLanguage } = useContext(LanguagesContext);

  return (
    <div>
      <p id="favoritelanguage">Favorite programming language: {favoriteLanguage}</p>
      <button id="changeFavorite" onClick={toggleLanguage}>Toggle language</button>
    </div>
  );
}

export default page