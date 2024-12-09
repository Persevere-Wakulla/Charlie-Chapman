import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
// ? pages
import Home from "./pages/Home";
import RecipesLayout from "./pages/Recipes/RecipesLayout";
import Recipes, { recipesLoader } from "./pages/Recipes/Recipes";
import RootLayout from "./pages/RootLayout/RootLayout";
import SignUpForRecipes from "./pages/Recipes/SignUpForRecipes";
import Interact from "./pages/layouts/Interact";
import Faq from "./pages/layouts/Interact/Faq";
import Contact from "./pages/layouts/Interact/Contact";
import NotFound from "./pages/layouts/Interact/NotFound";
import RecipesDetails, { recipesDetailsLoader } from "./pages/Recipes/RecipesDetails"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="recipes"
       element={<RecipesLayout />} >
        <Route index element={<Recipes/>}
       loader={recipesLoader}/>
        <Route
          path=":id"
          element={<RecipesDetails />}
          loader = {recipesDetailsLoader}
          />
      
      </Route>
      <Route path="signUpforRecipes" element={<SignUpForRecipes/>} />
      <Route path="interact" element={<Interact />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

