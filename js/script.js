//
// Ondas en canvas
//

/*

Realizar un prototipo de animación utilizando algún elemento básico como punto de entrada:

Imágenes: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
Texto: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText
Paths: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath
El objetivo del ejercicio es desarrollar un sistema para explorar diferentes tipos de animación de un mismo elemento. 
Pueden seguir este sistema como ejemplo:

Renderizar: dibujar el elemento en el canvas
Parametizar: Qué características de este elemento pueden ser variables?
Animar: Cómo puedo animar estas características para crear visuales mas interesantes?
Randomize: Cuáles de estos parámetros pueden usar valores random?
Interacción: Cuáles de estas variables pueden estar atadas a la interacción del usuario como mouse clicks o hover o keyboard?
Iterar: Repetir el proceso, cambiando más variables, agregando color, agregando más animación y/o interacción.

*/

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 80;
let y = 80 ;
let vx= 25;
let vy = 15;
let r = 12;

function draw() {

    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (x > canvas.width - r || x < r) {
    vx =- vx;
    }
    if (y > canvas.height - r || y < r) {
    vy =- vy;
    }

    x += vx;
    y += vy;

    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fillStyle="Pink";
    ctx.fill();
    ctx.closePath(); 


    window.requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

