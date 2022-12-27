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
            <Route path="/piano" element={<Results query="piano" />} />
            <Route path="/guitar" element={<Results query="guitar" />} />
            <Route path="/drums" element={<Results query="drums" />} />
            <Route path="/:searchText" element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
