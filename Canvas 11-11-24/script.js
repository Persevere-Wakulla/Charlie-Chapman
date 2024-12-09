// const ctx = myCanvas.getContext('2d');

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const heartImage = new Image();
heartImage.src = "heart.png";

const maxY = 100;
const rangeY = 100;
let p = 0;

animate();
function animate() {
    p = p + 0.02;
    if(p > 1){
        p = 0
    }
    const y = maxY - Math.abs(Math.sin(p*Math.PI)) * rangeY;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);

    ctx.drawImage(heartImage, 70, y, 70, 40);

    ctx.font = "30px Arial"
    ctx.textBasdeline = "middle";
    ctx.textAlign = "center"
    ctx.fillStyle = "blue"
    ctx.fillText("Dolla Bill", 100, 100)
}


// console.log(ctx.fillText);
