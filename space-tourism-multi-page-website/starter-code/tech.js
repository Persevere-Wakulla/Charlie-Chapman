// btns
const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
// var. for textcontent
const vehicle = document.querySelector('.lV');
const descript = document.querySelector('.tech-para');
const image = document.querySelector('.tech');
// function to open NavBar
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
      vehicle.textContent = json.technology[0].name
      descript.textContent = json.technology[0].description
      image.src = json.technology[0].images.portrait

      oneBtn.addEventListener('click', () => {
        vehicle.textContent = json.technology[0].name
        descript.textContent = json.technology[0].description
        image.src = json.technology[0].images.portrait
      })

      twoBtn.addEventListener('click', () => {
        vehicle.textContent = json.technology[1].name
        descript.textContent = json.technology[1].description
        image.src = json.technology[1].images.portrait
      })

      threeBtn.addEventListener('click', () => {
        vehicle.textContent = json.technology[2].name
        descript.textContent = json.technology[2].description
        image.src = json.technology[2].images.portrait
      })
    });
});