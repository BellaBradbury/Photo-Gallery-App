// dependencies
import React from 'react';

// components
import MainNav from './MainNav';
import SearchForm from './SearchForm';

// appears on every page
function Header() {
  return (
      <div className='header'>
        <SearchForm />
        <MainNav />
    </div>
  );
}

export default Header;