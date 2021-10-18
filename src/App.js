import logo from './logo.svg';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {CounterButton} from './components/CounterButton/CounterButton'
import { useState } from 'react';

function App() {

  let [startCount,setstartCount] = useState(0);
  const add = ()=>{
    setstartCount(startCount++);
  }
  const minus = ()=>{
    setstartCount(startCount--);
  }

  return (
    <>
      <div className="container">
          <Counter count={startCount}/>
          <div className="App">
            <CounterButton add={add} minus={minus}/>
          </div>
      </div>
    </>
  );
}

export default App;
