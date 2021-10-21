import { CounterButton } from '../../CounterButton/CounterButton';
import {Counter} from '../../counter/Counter'
import { useState } from 'react';
import './CounterAction.scss';

const CounterAction = ()=>{
    let [startCount,setstartCount] = useState(0);
    
    const add = ()=>{
        setstartCount(startCount++);
    }
    const minus = ()=>{
        startCount >= 0 && setstartCount(startCount--);
    }
    return(
        <>
            <div class="count card">
                <Counter startCount = {startCount}></Counter>
                <CounterButton add={add} minus={minus}></CounterButton>
            </div>
        </>
    );
}
export {CounterAction}