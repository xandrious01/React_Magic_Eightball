import React, { useState, useContext } from 'react';
import { EightballContext } from './App.js';

const ColorsCounter = () => {
    const [count, setCount] = useState(0);
    const data = useContext(EightballContext);
    console.log(data)
    return (
        <div className="eightball-counter-container">
                <h3 className="eightball-counter green">Green: {count}</h3>
                <h3 className="eightball-counter goldenrod">Goldenrod:</h3>
                <h3 className="eightball-counter red">Red:</h3>
        </div>
    )

}

export default ColorsCounter;