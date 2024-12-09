const el = document.getElementById('myCanvas');
const ctx = el.getContext('2d');

ctx.beginPath();
ctx.rect(40,40,60,60);
ctx.lineWidth =10;
ctx.strokeStyle = '#ff0000';
ctx.fillStyle = '#009933'
ctx.fill()
ctx.stroke();