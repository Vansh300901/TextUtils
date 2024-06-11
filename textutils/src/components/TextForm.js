import React, { useState } from 'react'


const TextForm = (props) => {
    const [textarea, setTextarea] = useState('');

    const handleTextChange = (event) => {
        setTextarea(event.target.value);
    }

    const handleUppercaseClick = () => {
        let newText = textarea.toUpperCase();
        setTextarea(newText)
    }

    const handleLowercaseClick = () => {
        let newText = textarea.toLowerCase();
        setTextarea(newText)
    }

    const handleClearClick = () => {
        setTextarea('')
    }

    const handleCopyClick = () => {
        console.log(document.getElementById("myBox"))
        navigator.clipboard.writeText(document.getElementById("myBox").select())
    }

    const handleRemoveSpacesClick = () => {
        let newText = textarea.split(/[ ]+/);
        setTextarea(newText.join(" "))
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" onChange={handleTextChange} value={textarea} placeholder='Enter Text Here'></textarea>
                </div>
                <button className="btn btn-outline-primary mx-2" onClick={handleUppercaseClick}>Convert to Uppercase</button>
                <button className="btn btn-outline-success mx-2" onClick={handleLowercaseClick}>Convert to Lowercase</button>
                <button className="btn btn-outline-dark mx-2" onClick={handleRemoveSpacesClick}>Remove Extra Spacex</button>
                <button className="btn btn-outline-secondary mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-outline-danger mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{textarea.length} characters and {textarea.split(" ").length} words</p>
                <p>{0.008 * textarea.split(" ").length} minutes to read</p>
                <h3>Preview</h3>
                <p>{textarea}</p>
            </div>
        </>
    )
}

export default TextForm

