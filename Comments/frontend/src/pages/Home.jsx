import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../componets/Spinner";
import CommentsTable from "../componets/home/CommentsTable";
import CommentsCard from "../componets/home/CommentsCard";

const Home = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table')
  const [time, setTime] = useState(new Date())

  const getComments = async () => {
    try {
      setLoading(true)
      const req = await fetch("http://localhost:5555/comments")
      const res = await req.json()
      if (res) setComments(res.data)
      console.log(res.data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.message);
    }
  }

  useEffect(() => {
    getComments()
  }, [])

  useEffect(() =>{
    const interValId = setInterval(()=>{
      setTime(new Date())
    },1000)
    return () =>{
      clearInterval(interValId)
    }
  },[])

  function formatTime(){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds= time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${hours}:${padZero( minutes)} ${meridiem}`
    
  }
  function padZero(number){
    return (number < 10 ? "0":"") + number
  }
  
  return (
    <div className="p-4 transition-all duration-400 home">
      <div className="flex justify-center items-center gap-x-4">
        <button className="bg--300 px-4 py-1 rounded-lg t" onClick={() => setShowType('table')} >
          Table
        </button>
            <div className="clock" >
              <span className="time" >{formatTime()}</span>
            </div>
        <button className="bg-sky-300 px-4 py-1 rounded-lg t" onClick={() => setShowType('card')}>
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl  hover:bg-300 duration-400 transition-all hover:cursor-pointer border-blue-400 p-1 h ho">Comments</h1>
        <Link to="/comments/create"><div className="bg-blue-300 rounded-md hover:bg-green-500 duration-500 transition-all p">&#128933; </div></Link>
      </div>
      {loading ?
        <Spinner /> :
        showType === 'table' ? <CommentsTable comments={comments} /> : <CommentsCard comments={comments} />}
    </div>
  );
};

export default Home;
