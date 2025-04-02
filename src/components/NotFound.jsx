import React from "react";
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h3>The page that you are looking for does not exist</h3>
            <Link to='/'>Back to Homepage</Link>
        </div>
    );
}

export default NotFound;