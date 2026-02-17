import React, { useEffect, useState } from 'react';

const getSystemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || getSystemTheme());

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <button
        aria-label="Toggle dark mode"
        className="fixed bottom-4 right-4 z-50 p-2 rounded-lg bg-white dark:bg-slate-800 shadow-md border border-border dark:border-slate-700 text-primary dark:text-accent hover:bg-surface dark:hover:bg-slate-700 transition"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = React.createContext<{
  theme: string;
  setTheme: (theme: string) => void;
}>({ theme: 'light', setTheme: () => {} });
