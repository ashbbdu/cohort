import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    const inputRef = useRef(null)
    const divRef = useRef(null)
    

    useEffect(() => {
        handleButtonClick()
        console.log(divRef);
        divRef.current.scrollIntoView()
    }, []);

    const handleButtonClick = () => {
        inputRef.current.focus()
    };

    return (
        <div className="outer-container">
            <input ref={inputRef}   type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
            <div ref={divRef} className="inner-container">
                <h1>This is another div</h1>
            </div>
        </div>
    );
};
