import { useState } from "react"

const CounterComponent = () =>{

const [count, setCount] = useState(0)

const increment = () => {
    setCount(count + 10)
}
const decrement = () => {
    setCount(count - 5)
}
const reset = () => {
    setCount(0)
}
return(
    <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-btn" onClick={decrement}>Decrease</button>
        <button className="counter-btn" onClick={reset}>Reset</button>
        <button className="counter-btn" onClick={increment}>Increase</button>

    </div>
)

}
export default CounterComponent