import React, { useEffect, useState } from 'react';
import { DEFAULT_THEME, applyTheme } from './theme';

const themeNames = ['base', 'dark', 'casual'];

const defaultTheme = () => {
  if (localStorage.getItem('theme')) return localStorage.getItem('theme');
  if (window.matchMedia && window.matchMedia('prefers-color-scheme: dark')) {
    return 'dark';
  } else {
    return DEFAULT_THEME;
  }
};

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Aliquam vel libero consequat orci lacinia tempus ac non quam. Praesent vitae 
  ipsum ipsum. Morbi consequat commodo rutrum. Fusce dictum ullamcorper 
  ultrices. Mauris scelerisque lectus sed mattis lobortis. In non consequat 
  purus. Fusce aliquet rhoncus ipsum id pretium. Proin eget orci luctus, 
  rhoncus felis sit amet, pulvinar magna. Suspendisse consectetur libero ex, 
  sed semper felis bibendum quis. Cras mi felis, varius nec pulvinar in, 
  consectetur sed sapien. Vestibulum sed lectus molestie lorem consectetur 
  imperdiet. Nam venenatis libero leo, eget aliquet turpis mollis ac. Nullam 
  pretium leo dolor, vitae mattis justo imperdiet sed. Donec volutpat porta 
  magna ut mattis. Nam a felis ut quam suscipit rhoncus at at lorem.`;

function App() {
  const [theme, setTheme] = useState(defaultTheme);
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const handleSwitchTheme = (evt) => {
    localStorage.setItem('theme', evt.target.value);
    setTheme(evt.target.value);
  };

  return (
    <div>
      <ThemeSwitcher
        handleSwitchTheme={handleSwitchTheme}
        currentTheme={theme}
      />
      <Card title='Card Title' content={loremIpsum} />
    </div>
  );
}

function ThemeSwitcher({ handleSwitchTheme, currentTheme }) {
  return (
    <div className='flex justify-center'>
      <div className='w-full md:w-1/3 px-3 mb-6 md:mb-6 md:mb-0'>
        <label htmlFor='theme-select' className='text-primary-text font-bold'>
          Theme switcher
        </label>
        <div className='relative'>
          <select
            id='theme-select'
            className={`w-full block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            onChange={handleSwitchTheme}
            value={currentTheme}
          >
            {themeNames.map((name) => {
              return (
                <option key={name} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
            <svg
              className='fill-current h-4 w-4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, content }) {
  return (
    <div className='bg-sec-background rounded-lg p-6 mx-6'>
      <h2 className='text-lg'>{title}</h2>
      <div className='text-primary-text'>{content}</div>
    </div>
  );
}

export default App;
