import React, { useEffect, useState } from 'react';
import { DEFAULT_THEME, applyTheme } from './theme';

function App() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const handleClick = () => {
    if (theme === DEFAULT_THEME) {
      setTheme('dark');
    } else {
      setTheme('base');
    }
  };
  return (
    <div className='bg-primary h-screen w-screen'>
      text
      <button onClick={handleClick} className='bg-primary-text'>
        switch
      </button>
    </div>
  );
}

export default App;
