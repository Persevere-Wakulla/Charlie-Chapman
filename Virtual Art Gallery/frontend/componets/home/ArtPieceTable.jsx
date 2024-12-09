import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../layout/RootLayout.jsx";
import { Link } from 'react-router-dom'
import Image from '../pages/Image.jsx'
import ToolTip from '../pages/ToolTip.jsx'
import RootLayout from "../../layout/RootLayout.jsx";

const ArtPieceTable = ({ piece, AdminLogin }) => {

  const [canvasType, setCanvasType] = useState([]);
  const showType = (e) => {
    let target;
    if (e.target.classList.contains("art-btn")) {
      target = e.target.lastElementChild.innerText;
    } else {
      target = e.target.parentElement.lastElementChild.innerText;
    }
    console.log(target);
    setCanvasType(piece.filter((it) => { if (it.category.includes(target)) return it }));
  };
  const theme = useContext(ThemeContext)

  useEffect(() => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark-mode')
    } else {
        document.documentElement.classList.remove('dark-mode')
    }
}, [theme])

  return (
    <div className='home-div' >
      <div className="btn-div" onClick={showType}>
        <button autoFocus className="art-btn">
          <span><i className="bi bi-palette"></i></span>
          <span>Canvas</span>
        </button>
        <button autoFocus className="art-btn">
          <span><i className="bi bi-hammer"></i></span>
          <span>Metal Work</span>
        </button>
      </div>

      <div className="home-container " >

        {canvasType.length ? (canvasType.map((p, index) =>
        (<div key={index} className="card" id='home'  >
          <div className='' id='piece-img'>
            <Image piece={p} />
            <ToolTip piece={p} />
          </div>

          <div className="controls">
            {
              AdminLogin &&
              <div className='control div'>
                <Link to={`piece/edit/${p._id}`}>
                  <div className="edit-btn">✏️</div>
                </Link>
                <Link to={`piece/delete/${p._id}`}>
                  <div className="delete-btn">🗑️</div>
                </Link>
              </div>
            }
          </div>
        </div>))) :
          piece.map((p, index) =>
            (<div key={index} className="card" id='home'  >
            <div className='' id='piece-img'>
              <Image piece={p} />
              <ToolTip piece={p} />
            </div>

            <div className="controls">
              {
                AdminLogin &&
                <div className='control div'>
                  <Link to={`piece/edit/${p._id}`}>
                    <div className="edit-btn">✏️</div>
                  </Link>
                  <Link to={`piece/delete/${p._id}`}>
                    <div className="delete-btn">🗑️</div>
                  </Link>
                </div>
              }
            </div>
          </div>
          ))}
      </div>
    </div>
  )


}

export default ArtPieceTable