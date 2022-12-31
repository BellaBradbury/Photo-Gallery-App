// dependencies
import React from "react";
import Photo from "./Photo";
import NoPhotos from "./NoPhotos";

const PhotoList = (props) => {
    // variables
    const results = props.data;
    let photos;

    // checks to see if there are any results from the fetch request and either:
        // RESULTS = maps the results from Photo.js
        // NO RESULTS = prepares the NoPhotos.js file
    if (results.length > 0) {
       photos = results.map(photo => <Photo key={photo.id} id={photo.id} server={photo.server} secret={photo.secret} alt={photo.title} />);
    } else {
        photos = <NoPhotos />
    }

    // displays the results from if/else statement above on the page
    return(
        <ul>
            {photos}
        </ul>
    );
}

export default PhotoList;