let image = ['images/image-product-1.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg'];
const thumbImg = ['./images/image-product-1-thumnail.jpg', './images/image-product-2-thumnail.jpg', './images/image-product-3-thumnail.jpg', './images/image-product-4-thumnail.jpg'];
const imgSlide = document.getElementById('img-holder');
const moveForwardElement = document.getElementById('forward');
const moveBackwardElement = document.getElementById('back');
let i = 0;
let count = 0;
const btns = document.querySelectorAll('.btn');
const numOfShoes = document.querySelector('#counter');
const modal = document.querySelector('.modal-overlay');
const addToCart = document.querySelector('.add_to_cart');
const overlay = document.querySelector('.modal-container');
const deleteCart = document.getElementById('delete');
const modalCount = document.getElementById('span');
const totalPrice = document.getElementById('span2');
const cartDelete = document.getElementById('deletebtn');
const modalText = document.getElementById('overlay-para');
const modalImg = document.getElementById('thumb');
const checkOutBtn = document.querySelector('.checkout');
const closeBtn = document.getElementById('close');
const firstThumb = document.getElementById('thumb1');
const secondThumb = document.getElementById('thumb2');
const thirdThumb = document.getElementById('thumb3');
const fourthThumb = document.getElementById('thumb4');
const checkOutCart = document.getElementById('cart');
const secondImg = image[0];
const bodyElem = document.querySelector('#main');
const cartElem = document.querySelector('.cart');

// img slide function forward
moveForwardElement.addEventListener('click', forward)
function forward() {

    if (i === image.length - 1) {
        i = 0
        imgSlide.src = image[i]
        return
    }
    i++
    imgSlide.src = image[i]
}
// img slide function backward
moveBackwardElement.addEventListener('click', backward)
function backward() {
    if (i === 0) {
        i = image.length - 1
        imgSlide.src = image[i]
        return
    }
    i--
    imgSlide.src = image[i]
}
// eventListener for img slide forward button
moveForwardElement.addEventListener('click', forward)

// finction to display price & calculate price
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        let price;
        console.log({ price })
        if (count < 0) { count = 0 }
        const styles = e.currentTarget.classList;
        if (count === 6) { count = 1 }
        if (styles.contains('minus')) {
            count--;
            price = (125.00 * count);

            totalPrice.textContent = price;
        } if (styles.contains('plus')) {
            count++;
            price = (125.00 * count);

            totalPrice.textContent = price;

        }
        numOfShoes.textContent = count;
        modalCount.textContent = count;
        cartElem.textContent = count;
        console.log(price)
    })
});
// eventListener & function to display modal
addToCart.addEventListener('click', function () {
    modal.style.display = 'block'
});
// function & eventListener  to delete cart & price display
cartDelete.addEventListener('click', function () {
    modalCount.textContent = '';
    totalPrice.textContent = '';
    numOfShoes.textContent = '';
    modalImg.style.display = 'none';
    modalText.textContent = 'Your cart is empty'
    modalText.style.fontSize = '30px'
    modalText.style.lineHeight = '50px'
    checkOutBtn.style.display = 'none'
    cartDelete.style.display = 'none'
    cartElem.textContent = '0';
});

// eventListener & function for checkout btn
checkOutCart.addEventListener('mouseover', function () {
    modal.style.display = 'block'
});

// function & eventListener to close modal
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none'
});

// eventlistener & function for mouseOver on thumbNail imgs
firstThumb.addEventListener('mouseover', function (ev) {
    imgSlide.src = image[0];
});
// eventlistener & function for mouseOver on thumbNail imgs
secondThumb.addEventListener('mouseover', function (ev) {
    imgSlide.src = image[1];
});
// eventlistener & function for mouseOver on thumbNail imgs
thirdThumb.addEventListener('mouseover', function (ev) {
    imgSlide.src = image[2];
});
// eventlistener & function for mouseOver on thumbNail imgs
fourthThumb.addEventListener('mouseover', function (ev) {
    imgSlide.src = image[3];
});



