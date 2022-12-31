// dependencies
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiKey from '../config';

// components
import PhotoList from './PhotoList';

const Results = (props) => {
  // variables
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  let { searchText } = useParams();

  // handles loading effect status, fetch requests, and potential errors
  useEffect( () => {
    setLoading(true);
    let activeFetch = true;

    // uses props.query to make fetch request from flickr.com
    if (typeof searchText === 'undefined') {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${props.query}&per_page=24&format=json&nojsoncallback=1`)
      .then( response => {
        if (activeFetch) {
          setPhotos(response.data.photos.photo);
        }
        setLoading(false);
        console.log(props.query);
      })
      .catch(error => {
        console.log('Error fetching and parsing request', error); 
      });
    } else { // uses searchText to make fetch request from flickr.com
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchText}&per_page=24&format=json&nojsoncallback=1`)
      .then( response => {
        if (activeFetch) {
          setPhotos(response.data.photos.photo);
        }
        setLoading(false);
        console.log(searchText);
      })
      .catch(error => {
        console.log('Error fetching and parsing request', error); 
      });
    }
    return () => {activeFetch = false}
  }, [props.query, searchText]);

  // displays loading feature in between fetch requests before mapped results from PhotoList.js are loaded in
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