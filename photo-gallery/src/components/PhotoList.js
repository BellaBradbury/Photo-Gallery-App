import React from "react";
import Photo from "./Photo";
import NoPhotos from "./NoPhotos";

const PhotoList = props => {
    const results = props.data;
    let photos;
    if (results.length > 0) {
       photos = results.map(photo => <Photo url={photo.url} key={photo.id} />);
    } else {
        photos = <NoPhotos />
    }

    return(
        <ul>
            {photos}
        </ul>
    );
}

export default PhotoList;