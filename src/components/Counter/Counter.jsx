import './Counter.scss'
const Counter = (props)=>{
    return(
        <div className="counter">
            <h2>Counter App</h2>
            <h3>{props.count}</h3>
        </div>
    );
}
export {Counter}