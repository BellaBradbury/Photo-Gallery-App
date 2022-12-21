import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiKey from './config';

// import MainNav 
import SearchForm from './components/SearchForm';
import PhotoList from './components/PhotoList';

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('piano');
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    setLoading(true);
    let activeFetch = true;

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( response => {
        setPhotos(response.data.photos.photo);
        setLoading(false);
        console.log(query);
      })
      .catch(error => {
        console.log('Error fetching and parsing request', error); 
      });
    return () => {activeFetch = false}
  }, [query]);

  const handleQueryChange = searchText => {
    setQuery(searchText);
  }

  return (
    <div className='container'>
      <SearchForm changeQuery={handleQueryChange} />
      {/* MainNav */}
      <div className='photo-container'>
        <h2>Results</h2>
        {
          (loading)
          ? <p>Loading...</p>
          :  <PhotoList data={photos} />
        }
      </div>
    </div>
  );
}

export default App;
