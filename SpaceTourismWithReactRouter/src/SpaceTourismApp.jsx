import {
    Route,
    createRoutesFromElements,
    RouterProvider,
    createBrowserRouter
  } from "react-router-dom";

// pages
import Home from "./assets2/Pages/Home";
import Destinations from "./assets2/Pages/Destinations";
import Crew from "./assets2/Pages/Crew";
import Technology from "./assets2/Pages/Technology";
import RootLayout from "./assets2/RootLayout";


//   ?  Fecthing data
const res = await fetch('data.json')
const data = await res.json()
console.log(data);

// layout

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route  index element={<Home />} />
      <Route path="destinations" element={<Destinations props={data.destinations}/>} />
      <Route path="crew" element={<Crew props={data.crew}/>} />
      <Route path="technology" element={<Technology props={data.technology}/>} />
    </Route>
  )
);




const SpaceTourismApp = () => {

    return(
        <RouterProvider router={router} />

    )
}
export default SpaceTourismApp