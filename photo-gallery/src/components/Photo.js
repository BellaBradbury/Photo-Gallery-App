// dependencies
import React from "react";

// sets the list item individually for each photo returned from the fetch request (up to 24 photos)
const Photo = props => (
    <li>
        <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_z.jpg`} alt={props.alt} />
    </li>
);

export default Photo;