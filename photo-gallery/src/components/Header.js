import React from 'react';

import MainNav from './MainNav';
import SearchForm from './SearchForm';

function Header() {
  return (
      <div className='header'>
        <SearchForm />
        <MainNav />
    </div>
  );
}

export default Header;