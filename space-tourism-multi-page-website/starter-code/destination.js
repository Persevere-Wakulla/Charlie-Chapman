// var for btns
const moonElem = document.querySelector('.moon');
const marsElem = document.querySelector('.mars');
const europaElem = document.querySelector('.europa');
const titanElem = document.querySelector('.titan');
//  vars for texxtcontent
const nameElem = document.querySelector('.name');
const descriptElem = document.querySelector('.descript');
const kmElem = document.querySelector('.km');
const trvlTimeElem = document.querySelector('.days');
const image = document.querySelector('.png');


function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  // function to close nav bar
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
// function to grab and display data & event listner
window.addEventListener('load', function () {
    fetch('./data.json')
        .then((res) => res.json())
        .then((json) => {
            image.src = json.destinations[0].images.png
            nameElem.textContent = json.destinations[0].name
            descriptElem.textContent = json.destinations[0].description
            kmElem.textContent = json.destinations[0].distance
            trvlTimeElem.textContent = json.destinations[0].travel

            moonElem.addEventListener('click', () => {
                console.log(moonElem)
                image.src = json.destinations[0].images.png
                nameElem.textContent = json.destinations[0].name
                descriptElem.textContent = json.destinations[0].description
                kmElem.textContent = json.destinations[0].distance
                trvlTimeElem.textContent = json.destinations[0].travel
            })

            marsElem.addEventListener('click', () => {
                nameElem.textContent = json.destinations[1].name
                descriptElem.textContent = json.destinations[1].description
                image.src = json.destinations[1].images.png
                kmElem.textContent = json.destinations[1].distance
                trvlTimeElem.textContent = json.destinations[1].travel
            })

            europaElem.addEventListener('click', () => {
                nameElem.textContent = json.destinations[2].name
                descriptElem.textContent = json.destinations[2].description
                image.src = json.destinations[2].images.png
                kmElem.textContent = json.destinations[2].distance
                trvlTimeElem.textContent = json.destinations[2].travel
            })

            titanElem.addEventListener('click', () => {
                nameElem.textContent = json.destinations[3].name
                descriptElem.textContent = json.destinations[3].description
                image.src = json.destinations[3].images.png
                kmElem.textContent = json.destinations[3].distance
                trvlTimeElem.textContent = json.destinations[3].travel
            })
        });
});