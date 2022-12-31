// dependencies
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Header from './components/Header';
import Results from './components/Results';
import NotFound from './components/NotFound';

// compiles full site containing all routes and components
function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Routes>
            <Route path="/" element={<Navigate to="/piano" />} />
            <Route path="/piano" element={<Results query="piano" />} />
            <Route path="/guitar" element={<Results query="guitar" />} />
            <Route path="/drums" element={<Results query="drums" />} />
            <Route path="/:searchText" element={<Results />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
