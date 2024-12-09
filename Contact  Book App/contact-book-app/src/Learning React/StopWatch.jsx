import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {

    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalId = useRef(null)
    const startTimeRef = useRef(0)

    useEffect(() =>{

    },[isRunning])

    const start = () =>{}
    const stop= () =>{}
    const reset = () =>{}
    const formatTime = () =>{
        return `00:00:00`
    }



    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}
            </div>
            <div className="controls">
                <button 
                className="start-btn"
                onClick={start}
                >Start🏃🏽‍♂️</button>
                <button 
                className="reset-btn"
                onClick={reset}
                >Reset🕛</button>
                <button 
                className="stop-btn"
                onClick={stop}
                >Stop🧍🏽‍♂️</button>
            </div>


        </div>
    )
}

export default Stopwatch