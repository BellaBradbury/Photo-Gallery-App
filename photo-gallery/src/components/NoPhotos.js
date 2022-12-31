// dependencies
import React from 'react';

// displaying only when there are no images to match search
const NoPhotos = props => (
    <li className='not-found'>
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
    </li>
);

export default NoPhotos;