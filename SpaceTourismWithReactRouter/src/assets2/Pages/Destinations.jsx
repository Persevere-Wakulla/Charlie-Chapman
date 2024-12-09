import { useState, useEffect } from "react";

const Destinations = ({ props }) => {
  console.log(props);

  const [index, setIndex] = useState(0);

const changeDest = (e) =>{
    const btns = [...document.querySelectorAll('button')]
    const goingTo = btns.findIndex(b => b.textContent === e.target.innerText)
    setIndex(goingTo)
}
  //   console.log(props[index].images.png);
  return (
    <section className="destinations">
      <img src={props[index].images.png} alt="" />
      <div className="headerDiv">
        <div className="btnDiv" onClick={changeDest}>
          <button>Moon</button>
          <button>Mars</button>
          <button>Europa</button>
          <button>Titan</button>
        </div>
        <h1>{props[index].name}</h1>
        <div className="destDiv">{props[index].description}</div>
        <div className="bottomDiv">
          <div className="dist">
            <p className="btm">AVG.DISTANCE</p>
            <h3 className="btmH3">{props[index].distance}</h3>
          </div>
          <div className="dist">
            <p className="btm">EST. TRAVEL TIME</p>
            <h3 className="btmH3">{props[index].travel}</h3>
          </div>
        </div>
      </div>
      {/* which condidtion are checking to be true ? do our code :(else) run other code */}
      {/* <button onClick={explore}>EXPLORE</button> */}
    </section>
  );
};
export default Destinations;
