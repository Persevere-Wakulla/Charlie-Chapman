// varibles
const navBtn = document.getElementById('nav-open');
const navCloseBtn = document.getElementById('close-nav');
const openFormBtn = document.querySelector('.open-button');
const closeFormBtn = document.querySelector('.cancel');
const showPasswordCheckBox = document.querySelector('.checkbox');
const loginBtn = document.querySelector('#login');
const emailInfo = document.querySelector('#emailText');
const passWordInfo = document.querySelector('#passwordText');
const userInputEle = document.getElementById('userInput');
const menuOptions = document.querySelector('.overlay-content')
const women = document.querySelector('.women');
const itemElem = document.querySelector('.items');
const totalSpent = document.querySelector('.totalCost')
const moneyDiv = document.querySelector('.money')
let payNow = document.querySelector('.paynow')
const greetingElem = document.querySelector('.greeting')

let jsonUserData = null;
let jsonProducts = null;
let jsonCart = null;
let total = 0

// function to get data
async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  const dataProduct = await res.json();
  jsonProducts = dataProduct
  // console.log(data[3].image);
}
await getProducts()

// function to get login info
async function getUserData(url) {
  const resUser = await fetch('https://fakestoreapi.com/users');
  const dataUser = await resUser.json();
  jsonUserData = dataUser;
  console.log(dataUser);
  // checkLoginInfo( emailText, passwordText, jsonUserData)
}
await getUserData()

// eventlistener to open nav  & function
navBtn.addEventListener('click', openNav)
function openNav() {
  document.getElementById("myNav").style.height = "100%";
};

// event listner to close nav  & function
navCloseBtn.addEventListener('click', closeNav)
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
};

// function to dispay login form  & event listner
openFormBtn.addEventListener('click', openForm)
function openForm() {
  document.getElementById("myForm").style.display = "block";
};

//   function to close form & event listner
closeFormBtn.addEventListener('click', closeForm)
function closeForm() {
  document.getElementById("myForm").style.display = "none";
};
// console.log(closeForm());


// login btn. event listener
loginBtn.addEventListener('click', (ev) => {
  ev.preventDefault();

  checkLoginInfo()
})

// function to check login info & display message
function checkLoginInfo() {

  // console.log(jsonUserData);
  // console.log(passWordInfo.value);
  let user = jsonUserData.find(user => emailInfo.value === user.email && passWordInfo.value === user.password);
  // console.dir(user);
  if (user !== undefined) {
    // alert('logged in');
    greetingElem.innerHTML += `<div class="alert">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
      &#128483;  Welcome Back <span class="name">${user.name.firstname} ${user.name.lastname} </span> &#127881;
      </div>`
    // save the user.id
    let myId = user.id
    // cartdata.find (cart.id === user.id)
    let cartId = jsonCart.find((cart) => cart.userId === myId)
    continueShopping(cartId)
  }
  else {
    alert('incorrect login')
  }

};
// function to find shopping cart by id
function continueShopping(cartId) {
  // loop through the cart to find each item
  cartId.products.forEach((product) => {
    let current = jsonProducts.find((item) => item.id === product.productId)
    buildCard(current)
  })
}
// clear cart
const clearCart = document.getElementById('discard');
// event listner for clearing cart
clearCart.addEventListener('click', emptyCart);
// function to clear cart
function emptyCart(){
  itemElem.innerHTML = ''
  total = 0
  payNow.textContent = total
  moneyDiv.replaceChildren([])
  payNow.replaceChildren([])

}


// modal varibles, eventlisteners & functions
const modalDiv = document.getElementById('modal-div');
const cartElem = document.querySelector('#cart');
const modalElem = document.querySelector('.modal');
const closeModalBtn = document.getElementById('closeModal');

// modal
cartElem.addEventListener('click', openModal);
// modal
function openModal() {
  modalDiv.style.display = 'block'
};
// modal
closeModalBtn.addEventListener('click', closeModal);
// modal
function closeModal() {
  modalDiv.style.display = 'none'
}

// checkout cart modal varibles
const checkOutModal = document.getElementById('cartModal');
const openCartModalBtn = document.querySelector(".checkcart");
const closeCartModalBtn = document.querySelector('.closeCartModal');

// event listner to open car modal
openCartModalBtn.addEventListener('click', cartModalOpen);
// functiom to open cart modal
function cartModalOpen() {
  checkOutModal.style.display = 'block'
}
// close cart modal event listner
closeCartModalBtn.addEventListener('click', closeCartModal)
// function to close cart modal
function closeCartModal() {
  total = 0
  checkOutModal.style.display = 'none'
  itemElem.innerHTML = ''
}

window.onclick = function (event) {
  if (event.target == checkOutModal) {
    checkOutModal.style.display = "none";
  }
}



// make an event listener
menuOptions.addEventListener('click', (ev) => {
  closeNav()

  filterChoice(ev)
})
let parent;
// function to filter through data
function buildCard(obj) {
  parent = document.querySelector('#placeItems');
  let divElem = document.createElement('div');
  divElem.className = 'card'
  let infoDiv = document.createElement('div')
  let pic = document.createElement('img');
  let descriptElem = document.createElement('p');
  descriptElem.classList.add('description')
  descriptElem.textContent = obj.description;
  let priceElem = document.createElement('span');
  priceElem.classList.add('productPrice')
  priceElem.textContent = `$ ${obj.price}`;
  let nameElm = document.createElement('h4');
  nameElm.textContent = obj.title
  let spanElem = document.createElement('span');
  spanElem.classList.add('tooltip')
  let pText = document.createElement('p')
  pText.classList.add('tooltiptext')
  pic.src = obj.image
  pic.classList.add('img')
  pText.append(spanElem)
  infoDiv.append(nameElm, descriptElem, priceElem)
  spanElem.textContent = 'Add to cart'
  spanElem.append(pic);
  divElem.append(infoDiv, spanElem)
  parent.append(divElem)

  pic.addEventListener('click', pushItems)
  function pushItems(ev) {
    console.log(ev.target)
    total = 0
    let current = jsonProducts.find((item) => item.image === ev.target.src)
    checkOutCart.push(current)

    console.log(checkOutCart);
  }
}
// function to add items to cart
let checkOutCart = []
let cartDetails = document.querySelector('.checkcart');
cartDetails.addEventListener('click', () => {
  moneyDiv.replaceChildren([])
  payNow.replaceChildren([])
  itemElem.replaceChildren([])
  checkOutCart.forEach((item) => {
    total += item.price
    localStorage.setItem('cartDetails', JSON.stringify(item))
    
    itemElem.innerHTML += ` <p class="product">Item:<span class="itemTitle"> ${item.title }</span> <span class="itemprice">$${item.price}</span> </p> <hr>`
    checkOutCart = localStorage.length ? JSON.parse(localStorage.getItem('item')) : []
    console.log((localStorage));
  })
  
  let userTotal = document.createElement('h4')
  userTotal.textContent = `$ ${total}`
  moneyDiv.append(userTotal)
  totalSpent.append(moneyDiv)
  payNow.textContent = total
  console.log(cartDetails);
})


// function to filter selections
function filterChoice(ev) {
  parent = document.querySelector('#placeItems');
  parent.replaceChildren();

  // console.log(ev.target.id)
  let choice = ev.target.id
  console.log(choice)
  let filtered
  if (choice === 'men') {
    filtered = jsonProducts.filter((product) => product.category === "men's clothing")
  }
  else {
    filtered = jsonProducts.filter((product) => product.category.includes(choice))
  }
  filtered.forEach((product) => {
    buildCard(product)
    // console.dir(product);
  })
};


// function to call cart info
async function getCartInfo() {
  const res = await fetch('https://fakestoreapi.com/carts');
  const dataCart = await res.json();
  jsonCart = dataCart
  console.log(dataCart);
}
await getCartInfo()

// varible for countdown
const countDownDate = new Date("June 6, 2024 18:00:00").getTime();

// function for count down
let x = setInterval(function () {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
console.log(jsonProducts);

// event listener for search bar
userInputEle.addEventListener('input', () => { handleKeyPress(jsonProducts) });

// function for search bar
function handleKeyPress(arr) {
  parent = document.querySelector('#placeItems');
  parent.replaceChildren();

  let query = userInputEle.value

  if (query) {
    let mapArr = arr.filter((product) => {
      if (product.title.toLowerCase().includes(query.toLowerCase())) {
        buildCard(product)
        return product;
      }
    })

    console.dir(mapArr);
  }
};
