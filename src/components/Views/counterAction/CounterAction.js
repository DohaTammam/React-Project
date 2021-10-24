import { CounterButton } from '../../CounterButton/CounterButton';
import {Counter} from '../../counter/Counter'
import './CounterAction.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from '../../Redux/count';
import '../../../App.css'

const CounterAction = ()=>{
    const state  = useSelector(state => state.counterReducer.count)
    const dispatch = useDispatch();


    const add = ()=>{
        dispatch(Increment(1));
    }
    const minus = ()=>{
        if(state>0){
            dispatch(Decrement(1));
        }
    }
    return(
        <>
        <div className="counter container">
            <div class="count card">
                <Counter startCount = {state}></Counter>
                <CounterButton add={add} minus={minus}></CounterButton>
            </div>
        </div>
        </>
    );
}
export {CounterAction}