import React, { useState, useEffect } from 'react'


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
        navigator.clipboard.writeText(textarea)
    }

    const handleRemoveSpacesClick = () => {
        let newText = textarea.split(/[ ]+/);
        setTextarea(newText.join(" "))
    }

    useEffect(() => {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
            #myBox::placeholder {
                color: ${props.mode.backgroundColor === 'light' ? '#a5a5a5' : 'black'};
            }
        `;
        document.head.appendChild(styleTag);

        return () => {
            document.head.removeChild(styleTag);
        };
    }, [props.mode]);


    return (
        <>
            <div className='container' style={{ color: props.mode.backgroundColor === 'light' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" onChange={handleTextChange} value={textarea} placeholder='Enter Text Here' style={{ backgroundColor: props.mode.backgroundColor === 'light' ? 'black' : 'white', color: props.mode.backgroundColor === 'light' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>Convert to Uppercase</button>
                <button className="btn btn-success mx-2" onClick={handleLowercaseClick}>Convert to Lowercase</button>
                <button className="btn btn-dark mx-2" onClick={handleRemoveSpacesClick}>Remove Extra Spaces</button>
                <button className="btn btn-secondary mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode.backgroundColor === 'light' ? 'white' : 'black' }}>
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

