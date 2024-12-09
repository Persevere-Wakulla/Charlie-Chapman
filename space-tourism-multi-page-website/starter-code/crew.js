const oneElm = document.getElementById('one');
const twoElm = document.getElementById('two');
const threeElm = document.getElementById('three');
const fourElm = document.getElementById('four');
// var for text content
const rankElem =document.querySelector('.rank');
const nameElem =document.querySelector('.name');
const textElem =document.querySelector('.paragraph');
const imgElem =document.querySelector('.crew');

// function to open NavBar
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  // function to close nav bar
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
// function to grab and display data & event listner
window.addEventListener('load', function(){
    fetch('./data.json')
    .then((res) => res.json())
    .then((json) =>{
      rankElem.textContent = json.crew[0].role
     nameElem.textContent = json.crew[0].name
     textElem.textContent = json.crew[0].bio
      imgElem.src= json.crew[0].images.png

      oneElm.addEventListener('click', () => {
        rankElem.textContent = json.crew[0].role
        nameElem.textContent = json.crew[0].name
        textElem.textContent = json.crew[0].bio
         imgElem.src= json.crew[0].images.png
      })
        fourElm.addEventListener('click', () => {
          rankElem.textContent = json.crew[1].role
          nameElem.textContent = json.crew[1].name
          textElem.textContent = json.crew[1].bio
           imgElem.src= json.crew[1].images.png
        })

      twoElm.addEventListener('click', () => {
        rankElem.textContent = json.crew[2].role
     nameElem.textContent = json.crew[2].name
     textElem.textContent = json.crew[2].bio
      imgElem.src= json.crew[2].images.png
      })

      threeElm.addEventListener('click', () => {
        rankElem.textContent = json.crew[3].role
        nameElem.textContent = json.crew[3].name
        textElem.textContent = json.crew[3].bio
         imgElem.src= json.crew[3].images.png
      })
    });
  });