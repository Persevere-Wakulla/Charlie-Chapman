import React, { Fragment } from 'react'
import MenuModal from '../home/MenuModal'
import { useState } from 'react';

const SubmitOrder = () => {
  const [showModal, setShowModal] = useState(false)
  const [newState, setNewState] = useState(null)
  const [orderForm, setOrderForm] = useState({
    customer: {},
    order: [
      {
        header: 'Drink',
        options: [
          { id: 1, type: 'Coke', price: 2.25, selected: false, quantity: 0 },
          { id: 2, type: 'Fanta-Orange', price: 2.25, selected: false, quantity: 0 },
          { id: 3, type: 'Sprite', price: 2.25, selected: false, quantity: 0 },
          { id: 4, type: 'Lemonade', price: 2.25, selected: false, quantity: 0 },
          { id: 5, type: 'Fruit Punch', price: 2.25, selected: false, quantity: 0 },
          { id: 6, type: 'Diet Coke', price: 2.25, selected: false, quantity: 0 },
          { id: 7, type: 'Tea', price: 2.25, selected: false, quantity: 0 },
          { id: 8, type: 'Water', price: 1.75, selected: false, quantity: 0 },
        ],
      },
      {
        header: 'Side',
        options: [
          { id: 1, type: 'Corn', price: 2.00, selected: false, quantity: 0 },
          { id: 2, type: 'Fries', price: 2.00, selected: false, quantity: 0 },
          { id: 3, type: 'Collard Greens', price: 2.75, selected: false, quantity: 0 },
          { id: 4, type: 'Butter Beans', price: 2.25, selected: false, quantity: 0 },

        ],
      },
      {
        header: 'Dessert',
        options: [
          { id: 1, type: 'Cookie(2pack)', price: 2.25, selected: false, quantity: 0 },
          { id: 2, type: 'Bannana Pudding', price: 2.75, selected: false, quantity: 0 },
          { id: 3, type: 'Brownie', price: 2.25, selected: false, quantity: 0 },
          { id: 4, type: 'Apple-Crisp', price: 2.75, selected: false, quantity: 0 },
        ],
      },
      {
        header: 'Dish',
        options: [
          { id: 1, type: 'Fried Chicken', price: 10.00, selected: false, quantity: 0 },
          { id: 2, type: 'Oxtails', price: 18.00, selected: false, quantity: 0 },
          { id: 3, type: 'Hamburger', price: 8.25, selected: false, quantity: 0 },
          { id: 4, type: 'Grilled Steak', price: 18.00, selected: false, quantity: 0 },
          { id: 5, type: 'Baked Fish', price: 15.00, selected: false, quantity: 0 },
          { id: 6, type: "Shrimp Po'Boy", price: 14.00, selected: false, quantity: 0 },
          { id: 7, type: 'Turkey Chops', price: 15.00, selected: false, quantity: 0 },
          { id: 8, type: 'BBQ Ribs', price: 12.25, selected: false, quantity: 0 },
          { id: 9, type: 'Grilled Chicken', price: 13.25, selected: false, quantity: 0 },
        ]
      }
    ]
  })

  console.log(showModal);
  

  // ? function to create order
  function createOrder(e) {
    e.preventDefault()
    const { customer } = orderForm;
    console.log(customer.firstName);
    const nameOnOrder = document.querySelector('.ordereName')
    const tele = document.querySelector('orderePhone')
    const email = document.querySelector('.ordererEmail')

    // nameOnOrder.textContent = customer.firstName
    // tele.textContent = customer.phone;
    // email.textContent = customer.email
    
    const drinksOrder = orderForm.order.filter(opt => opt.header === 'Drink').map(opt => opt.options).flat().filter(opt => opt.selected && opt.quantity > 0);
    // console.log(drinksOrder);
    const sideOrder = orderForm.order.filter(opt => opt.header === 'Side').map(opt => opt.options).flat().filter(opt => opt.selected && opt.quantity > 0);
    const dessertOrder = orderForm.order.filter(opt => opt.header === 'Dessert').map(opt => opt.options).flat().filter(opt => opt.selected && opt.quantity > 0);
    const dishOrder = orderForm.order.filter(opt => opt.header === 'Dish').map(opt => opt.options).flat().filter(opt => opt.selected && opt.quantity > 0);
    const orderSubmission = {
      customer,
      order: {drinksOrder, sideOrder, dessertOrder, dishOrder}
    }
    // console.dir(orderSubmission)
    setNewState(orderSubmission)
  }


  // TODO make select boxes, checkboxes, inputs of some kind to compile an order. function to submit to the DB 
  return (
    <div className='submit-div'>
      <h1 className='order-h1'>Send Order</h1>
      <form action="" onSubmit={createOrder} className=''>
        <div className='food-order '>
          <div className="drink-order">
            {orderForm.order.sort((a, b) => a.header > b.header ? 1 : -1).map((order, index) => <Fragment key={index}>
              <h4
              className='order-h4'>{order.header}</h4>
              {order.options.sort((a, b) => a.type > b.type ? 1 : -1).map(selection =>
                <Fragment key={selection.type.replaceAll(' ', '_')}>
                  <div className='selection-type' key={selection.type.replaceAll(' ', '_')} id={selection.type.replaceAll(' ', '_')}>
                    <label className='order-label' htmlFor={selection.type}>{selection.type} </label><br />
                    <span className='order-span'>{selection.price}</span> <input onChange={(e) => {

                      setOrderForm({
                        ...orderForm,
                        order: [...orderForm.order.filter(opt => opt.header !== order.header),
                        {
                          ...orderForm.order.find(opt => opt.header === order.header),
                          options: [...orderForm.order.find(opt => opt.header === order.header).options.filter(y => y.type !== selection.type), {
                            ...orderForm.order.find(opt => opt.header === order.header).options.find(y => y.type === selection.type),
                            selected: e.target.checked
                            
                          }
                          ]
                        }
                        ]
                      })
                    }} type="checkBox" className='check' name="drink" value={selection.selected} id={selection.type} />
                    <select name="numOf" onChange={(e) => {
                      setOrderForm({
                        ...orderForm,
                        order: [...orderForm.order.filter(opt => opt.header !== order.header),
                        {
                          ...orderForm.order.find(opt => opt.header === order.header), options: [...orderForm.order.find(opt => opt.header === order.header).options.filter(y => y.type !== selection.type), {
                            ...orderForm.order.find(opt => opt.header === order.header).options.find(y => y.type === selection.type),
                            quantity: Number(e.target.value)
                          }]
                        }
                        ]
                      })

                    }} className="numOf">
                      <option value="0">quantity</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </Fragment>
              )}
            </Fragment>)}
          </div>
        </div>
        <div className='order-input w3-mobile'>
          <input type="text"   onChange={(e) => setOrderForm({ ...orderForm, customer: { ...orderForm.customer, firstName: e.target.value } })} name="first-name" className='name-input w3-input w3-animate-input' placeholder='First Name...' id='fname' required />
          <input onChange={(e) => setOrderForm({ ...orderForm, customer: { ...orderForm.customer, lastName: e.target.value } })} id='lname'  type="text"className='lname-input w3-input w3-animate-input' name="last-name" placeholder='Last Name..' required  />
          <input onChange={(e) => setOrderForm({ ...orderForm, customer: { ...orderForm.customer, phone: e.target.value } })} type="tel" className='tele-input' id='pnum'  name="phone-num" placeholder='Phone number' />
          <input onChange={(e) => setOrderForm({ ...orderForm, customer: { ...orderForm.customer, email: e.target.value } })} type="email" className='email-input'  name="email" placeholder='Email@gmail.com' required />
          <div className="card-info w3-mobile">
            <input onChange={(e) => setOrderForm({ ...orderForm, customer: { ...orderForm.customer, ccNum: e.target.value } })} type="text"  className='num-input' id='num' name="card-num" placeholder='Card Number' required />
            <input onChange={(e) => setOrderForm({ ...orderForm, customer: { ...orderForm.customer, cvcNum: e.target.value } })} id='cvc'  className='cvc-input'  type="password" name="cvc" placeholder='cvc ' maxLength={3} required />
            <input onChange={(e) => setOrderForm({ ...orderForm, customer: { ...orderForm.customer, expDate: e.target.value } })} type="date"id='date'  className='date-input'  name="date" placeholder='Exp. Date' required />
          </div></div>

        <button type="submit" className='w3-button w3-padding-large'  id='submit-btn' onClick={() => setShowModal(true)}>Submit Order</button>
      </form>
      {
        showModal && newState && (
          <MenuModal props={newState.order} OnClose={setShowModal} />
        )
      }
    </div>
  )
}

export default SubmitOrder