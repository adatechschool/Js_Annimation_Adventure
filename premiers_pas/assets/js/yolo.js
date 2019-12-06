function rand(max) 
{
    return Math.floor(Math.random() * Math.floor(max));
}

let xpos;
let ypos;

function findMousePos(mouseEvent)
{
    xpos = mouseEvent.screenX;
    ypos = mouseEvent.screenY - 70;
}

let canvas = document.getElementById("lecanvas");
let ctx = canvas.getContext("2d");
let H = window.innerHeight;
let W = window.innerWidth;
console.log(H, W)
canvas.width = W;
canvas.height = H;
let red = rand(30, 255);
let green = rand(0, 255);
let blue = rand(0, 255);
let opacity = Math.random(1);
canvas.onmousemove = findMousePos;

function fadeOutEffect() {
    var fadeTarget = canvas;
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

/*class Bulle
{
    ctx.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ',' + Math.random(1) + ')';
    ctx.arc(xpos + rand(50) - rand(50), ypos + rand(50) - rand(50), rand(40), 0, Math.PI*2);
    ctx.fill();
    ctx.fillRect(xpos + rand(20) - rand(20), ypos + rand(20) - rand(20), rand(60), rand(60));   
}*/

function draw()
{
    red = rand(255);
    green = rand(255);
    blue = rand(255);
    opacity = Math.random(1);
    ctx.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity + ')';
    ctx.beginPath()
    ctx.arc(xpos + rand(30) - rand(30), ypos + rand(30) - rand(30), rand(20), 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
    //ctx.fillRect(xpos + rand(20) - rand(20), ypos + rand(20) - rand(20), rand(60), rand(60));   
}

//ctx.onmousemove = draw;
setInterval(draw, 10);
