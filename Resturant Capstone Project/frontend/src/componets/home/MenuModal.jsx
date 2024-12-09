import React from 'react'
import SubmitOrder from '../pages/SubmitOrder'

const MenuModal = ({ props, OnClose }) => {
  console.dir(props)
  const { drinksOrder, sideOrder, dessertOrder, dishOrder } = props
  const tally = [...drinksOrder, ...sideOrder, ...dessertOrder, ...dishOrder].reduce((acc, curr) => {
    const subtotal = acc + (curr.price * curr.quantity)
    return subtotal
  }, 0)
  console.log(tally);
  
  const grand = (tally * 1.07).toFixed(2)
  const modalItems = document.querySelector('.modal')

  // make 2 buttons, 1 to confirm, 1 to go back/edit
  // confirm => send a message "thanks" & pick up time
  // back closes the modal
  return (
    <div id='menu-modal'>
      <div className='modal'>
        <div onClick={() => OnClose(false)}>❎</div>
        <div>
          <h4><i className="bi bi-receipt"></i> Order <i className="bi bi-receipt"></i> <span className="orderNme"></span></h4>
          <ul className="itemOrder" id="dishOrdered">
            Dish:
            {dishOrder.map(item => (
              <li>{item.quantity} {item.type} subtotal: ${(item.price * item.quantity).toFixed(2)}</li>
            ))}</ul>
          <ul className="itemOrder" id="sideOrdered">
            Side(s):
            {sideOrder.map(item => (
              <li>{item.quantity} {item.type} subtotal: ${(item.price * item.quantity).toFixed(2)}</li>
            ))}</ul>
          <ul className="itemOrder" id="drinkOrdered">
            Drink:
            {drinksOrder.map(item => (
              <li>{item.quantity} {item.type} subtotal: ${(item.price * item.quantity).toFixed(2)}</li>
            ))}</ul>
          <ul className="itemOrder" id="dessertOrdered">
            Dessert:
            {dessertOrder.map(item => (
              <li>{item.quantity} {item.type} subtotal: ${(item.price * item.quantity).toFixed(2)}</li>
            ))}</ul>
        </div>
        <h3 className=''>Price:<span className="priceOfOrdered">$  {grand}</span></h3>
              {/* <img src="public/Food/platter-of-food.jpg" alt="foodPlatter" id='foodPlatter' /> */}
      </div>
      <div className="btn-div">
        <button>Edit Order </button>
        <button>Confirm</button>
      </div>

    </div>
  )
}

export default MenuModal