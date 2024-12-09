import React, { useState, useEffect } from "react";

const Home = () => {
  // ? variables for clock
  const [time, setTime] = useState(new Date());
  
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
// ? useffect for clock

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // ? function for clock

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  };

  // ? function to add zeros to clock

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="home" >
      
      {/* div for clock */}
      <div className="clock-container">
        <div className="clock">
          {/* clock face */}
          <span className="clock-span">{formatTime()}</span>
        </div>
      </div>
      <h1 className=" home-h1"><span className="home-span">Explore Different Types Of Recipes.</span> </h1>
      <p className="description">Over 25 different,delishous recipes. </p>
      <ol className="Ol" id="home-list">
        <li>Easy To Follow.</li>
        <li>Cuisine From different Countries.</li>
        <li>Short cooking times</li>
      </ol>
      <p className=" home-h1 home-p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        dolorem enim cum?
      </p>
      <p className=" home-h1 home-p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        dolorem enim cum?
      </p>
    </div>
  );
};
export default Home;
