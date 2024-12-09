import { useLoaderData, useParams } from "react-router";
import React, { useState, useEffect, useRef } from "react";

const RecipesDetails = () => {
  const { id } = useParams();
  const recipe = useLoaderData();
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    console.log(startTimeRef.current);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };
  const formatTime = () => {
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="recipeDetails">
      <div className="recipe-di">
        <img src={recipe.image} alt={recipe.name} className="recipe-img" />
        <div className="namediv">
          <h3 className="recipe-h3">Recipe for {recipe.name}</h3>
          <div className="stopwatch">
            <h2>Timer</h2>
            <div className="display">{formatTime()}</div>
            <div className="controls">
              <button onClick={start} className="start-btn">
                Start
              </button>
              <button onClick={reset} className="reset-btn">
                Reset
              </button>
              <button onClick={stop} className="stop-btn">
                Stop
              </button>
            </div>
          </div>
          <p className="ct">Cuisine Type: {recipe.cuisine} &#128506;</p>
        </div>
        <div className="grid">
          <div className="grid1">
            <h2 className="gird2-h2 gh1">Ingredients</h2>
            <ul >
              {recipe.ingredients.map((ing, index) => (
                <li key={index}>{ing},</li>
              ))}
            </ul>
          </div>
          <div className="grid2">
            <h2 className="gird2-h2 gh2">Instructions</h2>
            <ol className="recipe-ol">
              {recipe.instructions.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ol>
          </div>
          <div className="grid3">
            <div className="time">
              <p className="gird2-h2 grid-p"><em>&#129379;Prep time:</em><span className="time-span"> {recipe.prepTimeMinutes} minutes </span></p>
              <p className="gird2-h2 grid-p"><em>&#127859;Cook time:</em> <span className="time-span">{recipe.cookTimeMinutes} minutes</span> </p>
            </div>
            <p className="gird2-h2 grid-p"><em>&#129348;Serving size:</em><span className="time-span"> {recipe.servings}</span> </p>
            <p className="gird2-h2 grid-p"><em>Calories Per Serving:</em> <span className="time-span"> {recipe.caloriesPerServing} calories</span> </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipesDetails;

export const recipesDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("https://dummyjson.com/recipes/" + id);
  return res.json();
};
