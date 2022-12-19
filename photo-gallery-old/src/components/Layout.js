import React from "react";

import SearchForm from "./SearchForm";
import MainNav from "./MainNav";

function Layout () {
    return (
      <div className='container'>
        <SearchForm />
        <MainNav />
        </div>
    )
  }

  export default Layout;