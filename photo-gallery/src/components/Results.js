import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiKey from '../config';

import PhotoList from './PhotoList';

const Results = (props) => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('piano');
  const [loading, setLoading] = useState(true);
  let { searchText } = useParams();

  useEffect( () => {
    setLoading(true);
    let activeFetch = true;

    if (typeof searchText === 'undefined') {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchText}&per_page=24&format=json&nojsoncallback=1`)
      .then( response => {
        setPhotos(response.data.photos.photo);
        setLoading(false);
        console.log(searchText);
      })
      .catch(error => {
        console.log('Error fetching and parsing request', error); 
      });
    } else {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${props.query}&per_page=24&format=json&nojsoncallback=1`)
      .then( response => {
        setPhotos(response.data.photos.photo);
        setLoading(false);
        console.log(props.query);
      })
      .catch(error => {
        console.log('Error fetching and parsing request', error); 
      });
    }
    return () => {activeFetch = false}
  }, [props.query]);

  const handleQueryChange = searchText => {
    setQuery(searchText);
  }

  return (
    <div className='photo-container'>
    <h2>Results</h2>
    {
        (loading)
        ? <p>Loading...</p>
        :  <PhotoList data={photos} />
    }
    </div>
  );
}

export default Results;