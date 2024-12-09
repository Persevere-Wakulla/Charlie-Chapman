import { useState } from "react"

const UpdatingArrays = () => {
   const [foods, setFoods]  = useState(['Chicken', 'Shrimp','Oxtails','Fried-Lobster','Hamburger'])

   const handleFood = (e) => {

    const newFood =document.getElementById('foodInput').value
    document.getElementById('foodInput').value = ""
    setFoods(f =>[...foods,newFood])
   }
   const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index))
   }
   
    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index)=>
                     <li key={index}
                     onClick={()=>handleRemoveFood(index)}
                     >{food}</li>)}
            </ul>
            <input type="text" placeholder="Enter food name" id="foodInput" />
            <button onClick={handleFood}>Add Food</button>
        </div>
    )
}
 export default UpdatingArrays