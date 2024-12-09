import { useEffect, useState } from "react";
import ImageData from "./ImageData";
// import ImgContainer from "./ImgContainer";
import SingleImg from "./SingleImg";

const MemoryCard = () => {
  // setScore  &  setBestScore
  const [random, setRandom] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [score, SetScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const shuffleArray = (img) => {
      for (let i = img.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = img[i];
        img[i] = img[j];
        img[j] = temp;
      }
      return img;
    };
    setRandom([...shuffleArray(ImageData)]);
  }, [clicked]);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  function newGame(){
    SetScore(0)
    setClicked([])
    setGameOver((prev) => !prev);
  }

  function handleImg(e) {
    if (!clicked.includes(e.target.src)) {
      setClicked([...clicked, e.target.src]);
      SetScore((prev) => prev + 1);
    } else {
      setGameOver((prev) => !prev);
    }
  }

  return (
    <div >
      <div className="header">
      <h1 className="mem">Memory Checker</h1>
      <p className="bestScore">
        Best Score: <span>{bestScore}</span>
      </p>
      <p className="score">
        Score: <span>{score}</span>
      </p>
      </div>
      {/* <ImgContainer img={ImageData} /> */}
      <div className="imgDiv">
        {!gameOver ? random.map((img) => (
          <SingleImg img={img} imgClick={handleImg} />
        )) : <div className="over"><h1 className="overDiv">GameOver</h1><p onClick={newGame} className="overP">&#x1F3AE; Click here to play again &#x1F3AE;</p></div>}
      </div>
    </div>
  );
};
export default MemoryCard;
