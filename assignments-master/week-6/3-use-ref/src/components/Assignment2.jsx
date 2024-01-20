import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

// let totalRender = 0;
export function Assignment2() {

    const [forceRender , setForceRender] = useState(0);
    // const [totalRender , setTotalRender] = useState(0)
    const totalRender = useRef(0)
    // totalRender++
    const handleReRender = () => {
        // Update state to force re-render
        setForceRender(Math.random());
        // setTotalRender(prev => prev + 1)
 
    };

    totalRender.current = totalRender.current + 1;

    return (
        <div>
            <p>This component has rendered {totalRender.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};