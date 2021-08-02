//
// Canvas
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

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Animation position circle

class circle {
  constructor(x, y, vx, vy, r) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.r = r;
  }
}

const circleInstance = new circle(80, 110, 20, 10, 12);

x = 80;
y = 110;
vx = 20;
vy = 10;
r = 12;

function animationShapes() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  if (x > canvas.width - r || x < r) {
    vx =- vx;
  }
  if (y > canvas.height - r || y < r) {
    vy =- vy;
  }

  x += vx;
  y += vy;

  // Circle

  //ctx.beginPath(); // Dibuja una linea en el canvas
  ctx.arc(x,y,r,0,2*Math.PI);
  ctx.fillStyle="Pink";
  ctx.fill();
  ctx.closePath(); // Cerrar figura



  window.requestAnimationFrame(animationShapes);

}

animationShapes();