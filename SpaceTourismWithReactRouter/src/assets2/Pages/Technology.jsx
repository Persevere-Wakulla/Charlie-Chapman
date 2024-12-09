import { useState, useEffect } from "react";

const Technology = ({ props }) => {
  console.log(props);

  const [index, setIndex] = useState(0);

  const changeDest = (e) => {
    const btns = [...document.querySelectorAll("button")];
    const goingTo = btns.findIndex((b) => b.textContent === e.target.innerText);
    setIndex(goingTo);
  };
  return (
    <section className="tech">
      <img src={props[index].images.portrait} alt="" />
      <div className="headerDiv">
        <div className="btnDiv" onClick={changeDest}>
          <button>Launch vehicle</button>
          <button>Spaceport</button>
          <button>Space capsule</button>
        </div>
        <h1>{props[index].name}</h1>
        <div className="destDiv">{props[index].description}</div>
       
      </div>
    </section>
  );
};
export default Technology;
