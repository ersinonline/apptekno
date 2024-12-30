import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDarkMode] = useState(false);

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#fff4cc');
    }
  }, []);

  const toggleTheme = () => {
    // Theme toggle disabled - only light mode available
  };

  return { isDarkMode: false, toggleTheme };
}