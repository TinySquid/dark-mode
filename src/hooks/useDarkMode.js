import { useState, useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.toggle('dark-mode');
    } else {
      // document.body.classList.remove('darkmode');
      document.body.classList.toggle('dark-mode');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode]
};