// dependencies
import React from "react";

// displays only when a route is invalid
    // ex. /dog/67/cat
const NotFound = () => {
    return (
        <div className="photo-container">
            <h2>Uh oh!</h2>
            <p>The page you're looking for does not exist</p>
        </div>
    )
};

export default NotFound;