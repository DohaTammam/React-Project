import './CounterButton.scss'
const CounterButton = ({add,minus})=>
{
    return(
        <div className="countBtns">
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}
export {CounterButton};