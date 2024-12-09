import { useRef, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

const Recipes = () => {
  const data = useLoaderData();
  // console.log(data);

  // ? variable for  showing meal type
  const [mealType, setMealType] = useState([]);


  // function to show meal type
  const showType = (e) => {
    let target;
    if (e.target.classList.contains("recipe-btn")) {
      target = e.target.lastElementChild.innerText;
    } else {
      target = e.target.parentElement.lastElementChild.innerText;
    }
    setMealType(data.recipes.filter((it) => it.mealType.includes(target)));
  };

  // ? ref for div used to scroll the bottomm of the page
  
  const bottomRef = useRef(null);
  // ? function to scroll to bottom of page
  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

// ? function to scroll to top of page

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="recipes">
      <div className="btn-div" onClick={showType}>
        {/* btns to filter recipes */}
        <button autoFocus className="recipe-btn">
          <span>&#129479;</span>
          <span>Breakfast</span>
        </button>
        <button autoFocus className="recipe-btn">
          <span>&#129386;</span>
          <span>Lunch</span>
        </button>
        <button autoFocus className="recipe-btn">
          <span>&#127837;</span>
          <span>Dinner</span>
        </button>
        <button autoFocus className="recipe-btn">
          <span>&#127850;</span>
          <span>Snack</span>
        </button>
        <button autoFocus className="recipe-btn">
          <span>&#129346;</span>
          <span>Beverage </span>
        </button>
      </div>
      {/* btn to scroll to bottom of psge */}
      <button onClick={handleScrollToBottom} autoFocus className="scrollBtn">
        &#128071; Scroll to Bottom&#128071;
      </button>
      {/* map to map over array values */}
      {mealType.length > 0
        ? mealType.map((recipe) => (
            <Link to={recipe.id.toString()} key={recipe.id}>
              <div className="recipes">
                <h3 className="recipe-h3">{recipe.name}</h3>
                {/* <p className="recipe-p">{recipe.mealType[0]}</p> */}
                <div className="recipe-p">
                <p >Difficulty level: {recipe.difficulty}</p>
                </div>
              </div>
            </Link>
          ))
        : data.recipes.map((recipe) => (
            <Link to={recipe.id.toString()} key={recipe.id}>
              <div className="recipes">
                <h3 className="recipe-h3">{recipe.name}</h3>
                {/* <ul >
              {recipe.mealType.map((ing, index) => (
                <li key={index}>{ing},</li>
              ))}
            </ul> */}
            <div className="recipe-p">
                <p >Difficulty level: {recipe.difficulty}</p>
                </div>
              </div>
            </Link>
          ))}

          {/* btn to scroll up */}
      <button onClick={handleScrollToTop} className="scrollBtn">
        &#128070; Scroll to Top&#128070;
      </button>
      <div ref={bottomRef}></div>
    </div>
  );
};

export default Recipes;

export const recipesLoader = async () => {
  const res = await fetch("https://dummyjson.com/recipes?limit=0&skip");
  return res.json();
};

'https://dummyjson.com/recipes?limit=10&skip=10&select=name,image'