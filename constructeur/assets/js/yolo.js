function rand(max) 
{
    return Math.floor(Math.random() * Math.floor(max));
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

function fadeOutEffect(object) {
    var fadeTarget = object;
    var fadeEffect = setInterval(function () {
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

class Bulle
{
    constructor()
    {
        this.blue = blue;
        this.red = red;
        this.green = green;
        let xpos = screenX;
        let ypos = screenY - 70;
    }

        green = rand(255);
        red = rand(255);
        blue = rand(255);
        drawbulle()
        {   
            ctx.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ',' + Math.random(1) + ')';
            ctx.beginPath();
            ctx.arc(xpos + rand(50) - rand(50), ypos + rand(50) - rand(50), rand(40), 0, Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }
}

function draw()
{
    let bulle = new Bulle();
    bulle.drawbulle();
    fadeOutEffect(bulle);
}

ctx.onmousemove = draw;
