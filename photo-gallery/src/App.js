import React, { useEffect, useState } from 'react';
import apiKey from './config';

// import MainNav 
import SearchForm from './components/SearchForm';
import PhotoList from './components/PhotoList';

function App() {
  const [photos, setPhoto] = useState([]);
  useEffect( () => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}=piano&per_page=24&format=json&nojsoncallback=1`)
      .then( response => response.json() )
      .then( responseData => setPhoto(responseData.data) )
      .catch(error => console.log('Error fetching and parsing request', error) );
  },[]);

  return (
    <div className='container'>
      <SearchForm />
      {/* MainNav */}
      <div className='photo-container'>
        <h2>Results</h2>
        <PhotoList />
      </div>
    </div>
  );
}

export default App;
