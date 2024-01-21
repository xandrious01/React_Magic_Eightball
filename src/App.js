import './App.css';
import {answers, selectRandom} from './answers.js';
import Eightball from './Eightball.js';
import './Eightball.css';


const App = () => {
  
  return (
    <div>
      <Eightball answers={ answers } />
    </div>
  );
}

export default App;
