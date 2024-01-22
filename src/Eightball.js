import React, { useEffect, useState } from 'react';
import { answers, selectRandom } from './answers.js';

const Eightball = ({ answers = answers[0] }) => {
    const [answer, setAnswer] = useState(answers[0]);
    const { msg, color } = answer;

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnswer(answers[0]);
        }, 4000);
        return () => clearTimeout(timer);
    });

    return (
        <div className="eightball-container">
            <div className="eightball-sphere" style={{ backgroundColor: color }}
                onClick={() => setAnswer(selectRandom(answers))} >
                <h1 className="eightball-text" style={{ color: "white" }}>{msg}</h1>
                <div className="eightball-sphere-overlay">
                </div>
            </div>
        </div>
    )

}

export default Eightball;