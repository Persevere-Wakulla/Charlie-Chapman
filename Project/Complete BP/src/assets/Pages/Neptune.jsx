import Navbar from "../../Navbar";
import { useState, useEffect } from "react";
import Content from "../../Content";
import Picture from "../../Picture";
const Neptune = ({ props }) => {
  const [context, setContext] = useState("");
  // const [image, setImage] = useState('')

  let myContent =
    context === "O2 INTERNAL STRUCTURE"
      ? props.structure.content
      : context === "O3 SURFACE GEOLOGY"
      ? props.geology.content
      : props.overview.content;

  let myImage =
    context === "O2 INTERNAL STRUCTURE" ? (
      <img src={props.images.internal} alt="" />
    ) : context === "O3 SURFACE GEOLOGY" ? (
      <>
        <div className="geology">
          <img src={props.images.planet} alt="" />
          <img className="geo" src={props.images.geology} alt="" />
        </div>
      </>
    ) : (
      <img src={props.images.planet} alt="" />
    );

  return (
      <section>
        <Navbar />
        <div className="main-grid">
        {myImage}
        <div>
        <h1>{props.name}</h1>
        <Content index={myContent} />

        <span>
          Source <a href="">{props.geology.source}</a>
        </span>


        <div
          className="btn-div"
          onClick={(e) => setContext(e.target.textContent)}
        >
          <button className="neptune">O1 OVERVIEW</button> <br />
          <button className="neptune">O2 INTERNAL STRUCTURE</button> <br />
          <button className="neptune">O3 SURFACE GEOLOGY</button>
        </div>
        </div>
        </div>

        <div className="grid">
          <div className="infoDiv">
            <p className="infoP">ROTATION</p>
            <h3>{props.rotation}</h3>
          </div>
          <div className="infoDiv">
            <p className="infoP">REVOLUTION TIME</p>
            <h3>{props.revolution}</h3>
          </div>
          <div className="infoDiv">
            <p className="infoP">RADIUS</p>
            <h3>{props.radius}</h3>
          </div>
          <div className="infoDiv">
            <p className="infoP">AVERAGE TEMP.</p>
            <h3>{props.temperature}</h3>
          </div>
        </div>
      </section>
  );
};
export default Neptune;
