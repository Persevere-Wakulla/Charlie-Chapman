import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Spinner from "../home/Spinner.jsx";
import MenuTable from '../home/MenuTable.jsx';
import SignIn from '../home/SignIn.jsx'
import Footer from './footer.jsx';

const Home = () => {

  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(null)

  // const [showType, setShowType] = useState('table')
  const getMenuItem = async () => {
    try {
      setLoading(true)
      const req = await fetch("http://localhost:5050/Menu")
      const res = await req.json()
      if (res) setMenu(res.data)
      console.log(res.data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.message);
    }
  }
  useEffect(() => {
    getMenuItem()
  }, [])

  useEffect(() => {

  })

  return (
    <div className='home-div'>
      <div className="home">
        <h1 className="home-h1 animated bounce">Menu</h1>
        <div className="li-div w3-row">
          <div className="drinkdiv w3-third w3-container ">
            <div className="drink-header w3-tag w3-round  " id='drink-div'>
              <h3 className='w3-tag w3-round  w3-border w3-border-white  w3-animate-left'  id='drink-h3'>Drinks</h3>
              <p className="drink-p"><em>ALL Drinks $2.25</em>(Except water $1.75)</p>
            </div>
            <ul className="dinks w3-ul w3-card-4  w3-border w3-round" id='drink-ul'>
              <li className=''>Bottled Water(Voss)</li>
              <li>Coke</li>
              <li>Diet Coke</li>
              <li>Fanta-Orange</li>
              <li>Fruit Punch</li>
              <li>Lemonade</li>
              <li>Sprite</li>
              <li>Tea(UnSweet/Sweet)</li>
            </ul>
          </div>
          <div className="sides w3-third w3-container" >
            <div className='w3-tag w3-round ' id='side-div'>
            <h3 className='w3-tag w3-round w3-border w3-border-white w3-animate-top' id='side-h3'>Sides</h3>
            <p className="side-p"><em>ALL Sides $2.00</em>(Except greens $2.50)</p>
            </div>
            <ul className="side-dish w3-ul w3-card-4  w3-border w3-round" id='side-ul'>
              <li>Butter-Beans</li>
              <li>Cabbage</li>
              <li>Chips</li>
              <li>Corn</li>
              <li>Collard-Greens(Turkey)</li>
              <li>Fries</li>
              <li>Mac-N-Cheese</li>
            </ul>
          </div>
          <div className="desserts w3-third w3-container  ">
            <div className='w3-tag w3-round 'id='dessert-div' >
            <h3 className='w3-tag w3-round  w3-border w3-border-white w3-animate-right' id='dessert-h3'>Desserts</h3>
            <p className="dessert-p"><em>$2.50(all)</em></p>
            </div>
            <ul className='w3-ul w3-card-4  w3-border w3-round' id='dessert-ul'>
              <li>Apple-Crisp</li>
              <li>Bannana Pudding</li>
              <li>Brownie</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        <MenuTable menu={menu} manager={loggedIn}  className/>
      </div>
      <div className="admin">
        <SignIn log={setLoggedIn} />
        {loggedIn &&
          <Link to="/menu/create"><div className="bg-blue-300 rounded-md hover:bg-green-500 duration-500 transition-all p">&#128933;ADD MENU ITEM </div></Link>
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Home