import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
            <App />
        </BrowserRouter>
    // </React.StrictMode>
);

reportWebVitals(console.log);
