import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Results from './components/Results';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Routes>
          <Route exact path="/" element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
