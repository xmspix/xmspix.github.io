document.querySelector(".bg").appendChild(document.createElement("canvas")).id =
  "canvas";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

let hue = 0;
const particleArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 3;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    //   this.color = `hsl(${hue},100%, 20%)`;
    this.color = `rgba(255,255,255,0.5)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    // if (this.size > 0.3) this.size -= 0.05;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < 100; i++) {
    particleArray.push(new Particle());
  }
}
// init();

setInterval(() => particleArray.push(new Particle()), 200);

function handleParticles() {
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();
    for (let j = 0; j < particleArray.length; j++) {
      const dx = particleArray[i].x - particleArray[j].x;
      const dy = particleArray[i].y - particleArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = particleArray[i].color;
        // ctx.lineWidth = particleArray[i].size / 10;
        ctx.lineWidth = 0.1;
        ctx.moveTo(particleArray[i].x, particleArray[i].y);
        ctx.lineTo(particleArray[j].x, particleArray[j].y);
        ctx.stroke();
      }
    }
    // if (particleArray[i].size <= 0.3) {
    //   particleArray.splice(i, 1);
    //   i--;
    // }
    // if (particleArray.length < 30) init();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   ctx.fillStyle = "rgba(0,0,0,0.002)";
  //   ctx.fillRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  hue += 2;
  requestAnimationFrame(animate);
}
animate();