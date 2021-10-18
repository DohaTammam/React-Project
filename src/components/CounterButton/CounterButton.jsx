import './CounterButton.scss'
const CounterButton = (props)=>
{
    return(
        <div className="countBtns">
            <button onClick={props.add}>+</button>
            <button onClick={props.minus}>-</button>
        </div>
    )
}
export {CounterButton};