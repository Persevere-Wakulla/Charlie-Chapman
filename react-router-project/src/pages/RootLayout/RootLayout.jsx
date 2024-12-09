
import { NavLink, Outlet } from "react-router-dom";


const RootLayout = () => {
  return (
    <div>
       <header>
    <nav className="navbar">
      <h1 className="layout-h1"> &#127869; Cooking Recipes &#127869; </h1>
      <div className="bar">
      <NavLink to="/">&#127968;Home</NavLink>
      <NavLink to="recipes">&#128195;Recipes</NavLink>
      <NavLink to="interact">&#128233;Interact</NavLink>
      <NavLink to="signUpforRecipes">&#128221;Sign-Up</NavLink>
      </div>
    </nav>
   </header>
   <main><Outlet/></main>
    </div>
  );
};
export default RootLayout;
