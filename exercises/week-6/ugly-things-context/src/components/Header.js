import React from 'react';
import { withTheme } from './ThemeProvider';

const Header = ({theme, toggleTheme}) => {
  return (
   
      <div className={`${theme}-header`}>
        <h1>Header</h1>
        <button onClick={toggleTheme}>{theme === "dark" ? "Switch to light" : "Switch to dark"} </button>
      </div>

  );
};

export default withTheme(Header);