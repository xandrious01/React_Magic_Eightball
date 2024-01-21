import React, { useState } from 'react';
import { answers, selectRandom } from './answers.js';

const Eightball = ({ answers }) => {
    const [answer, setAnswer] = useState(selectRandom(answers));
    const { msg, color } = answer;
    console.log(msg, color)
    return ( 
        <div className="eightball-container">
            <div className="eightball-sphere" style={{backgroundColor : color}} 
            onClick={() => setAnswer(selectRandom(answers))} >  
                <h1 className="eightball-text" style={{color : "white"}}>{msg}</h1>
            </div>
        </div>
        )

}

export default Eightball;