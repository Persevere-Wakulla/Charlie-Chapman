import { useState, useEffect } from "react";


const Crew = ({props}) => {
    console.log(props);

    const [index, setIndex] = useState(0);
  
  const changeDest = (e) =>{
      const btns = [...document.querySelectorAll('button')]
      const goingTo = btns.findIndex(b => b.textContent === e.target.innerText)
      setIndex(goingTo)
  }

    return(
        
        <section className="crew">
            <img src={props[index].images.png} alt="" />
      <div className="headerDiv">
        <div className="btnDiv" onClick={changeDest}>
          <button>Commander</button>
          <button>Mission Specialist</button>
          <button>Pilot</button>
          <button>Flight Engineer</button>
        </div>
        <h2 className="role">{props[index].role}</h2>
        <h1>{props[index].name}</h1>
        <p className="bio">{props[index].bio}</p>        
      </div>

        </section>
    )
}
export default Crew