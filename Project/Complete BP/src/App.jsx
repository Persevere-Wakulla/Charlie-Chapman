import { Route, Routes } from 'react-router'
import Navbar from './Navbar';
import Earth from './assets/Pages/Earth';
import Jupiter from './assets/Pages/Jupiter';
import Venus from './assets/Pages/Venus';
import Mars from './assets/Pages/Mars';
import Mercury from './assets/Pages/Mercury';
import Neptune from './assets/Pages/Neptune';
import Saturn from './assets/Pages/Saturn';
import Uranus from './assets/Pages/Uranus';
import Home from './assets/Pages/Home';
const res = await fetch('../public/data.json')
const planets = await res.json()
console.log(planets);
const app = () => {

  return(
    <div>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/mercury' element={<Mercury props={planets[0]}/>}></Route>
      <Route path='/venus' element={<Venus props={planets[1]}/>}></Route>
      <Route path='/earth' element={<Earth props={planets[2]}/>}></Route>
      <Route path='/mars' element={<Mars props={planets[3]}/>}></Route>
      <Route path='/jupiter' element={<Jupiter props={planets[4]}/>}></Route>
      <Route path='/saturn' element={<Saturn props={planets[5]}/>}></Route>
      <Route path='/uranus' element={<Uranus props={planets[6]}/>}></Route>
      <Route path='/neptune' element={<Neptune props={planets[7]}/>}></Route>
     </Routes>
    </div>
  )
}
export default app
