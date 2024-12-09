import { useState, useEffect } from "react"

const DigitalClock = () => {


    const [time, setTime] = useState(new Date())

    const [date, setDate] = useState(new Date())

    useEffect(()=>{
        const intervalId = setInterval(() =>{
                setTime(new Date())
        }, 1000)

        return() =>{
            clearInterval(intervalId)
        }
    },[])

    useEffect(()=>{
        // console.log(time);
        if (time === "00:00:00"){
            setDate(new Date())
        }
        // const dayId = setInterval(() =>{
        //         setDate(new Date())
        // }, 1000)

        // return() =>{
        //     clearInterval(dayId)
        // }
    },[time])

    const formatTime = () => {
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()
        let meridiem = hours >= 12 ? 'PM' : 'AM'
        hours = hours % 12 || 12

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    const formatDate = () => {
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        // console.log(day,month,year);
      

        return `${padZero(month)}/${padZero(day)}/${year}`
    }

    const padZero = (number )=>{
            return ( number < 10 ? '0' : '') + number
    }


    return(
      <div className="clock-container">
        <div className="clock">
            <h3>{formatDate()}</h3>
            <span>{formatTime()}</span>
        </div>

      </div>
    )
}
export default DigitalClock