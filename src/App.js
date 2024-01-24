import './App.css';
import React, { useState, createContext, useContext } from 'react';
import { answers, selectRandom } from './answers.js';
import Eightball from './Eightball.js';
import ColorsCounter from './ColorsCounter.js';
import './Eightball.css';

export const EightballContext = createContext();

const App = () => {
  return (
    <>
      <div>
        <EightballContext.Provider value={answers}>
          <Eightball answers={answers} />
          <ColorsCounter />
        </EightballContext.Provider>
      </div>
    </>
  );
}

export default App;
