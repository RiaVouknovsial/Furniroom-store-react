import React, { useState } from 'react';
import './DynamicContent.css';

function DynamicContent() {
    const [content, setContent] = useState("Welcome!");

    return (
        <div className="dynamic-content">
            <h1>{content}</h1>
            <button onClick={() => setContent("You clicked Home!")}>Home</button>
            <button onClick={() => setContent("About Us")}>About</button>
            <button onClick={() => setContent("Our Services")}>Services</button>
        </div>
    );
}

export default DynamicContent;
