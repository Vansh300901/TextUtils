import React, { useState } from 'react'


export default function TextForm(props) {
    const [textarea, setTextarea] = useState('');

    const handleTextChange = (event) => {
        setTextarea(event.target.value);
    }

    const handleUppercaseClick = () => {
        let newText = textarea.toUpperCase();
        setTextarea(newText)
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" onChange={handleTextChange} value={textarea} placeholder='Enter Text Here'></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUppercaseClick}>Convert to Uppercase</button>
        </div>
    )
}

