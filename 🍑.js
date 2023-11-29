const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slidePosition = 0;

const moveToNextSlide = () => {
  if (slidePosition < 6) {
    slidePosition += 1;
    slides.style.transform = `translateX(-${slidePosition * 100}%)`;
  } else {
    slidePosition = 0;
    slides.style.transform = `translateX(0)`;
  }
};

const moveToPrevSlide = () => {
  if (slidePosition > 0) {
    slidePosition -= 1;
    slides.style.transform = `translateX(-${slidePosition * 100}%)`;
  } else {
    slidePosition = 6;
    slides.style.transform = `translateX(-${slidePosition * 100}%)`;
  }
};

const autoScroll = setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds

prevButton.addEventListener('click', () => {
  clearInterval(autoScroll); // Stop automatic scrolling when using buttons
  moveToPrevSlide();
});

nextButton.addEventListener('click', () => {
  clearInterval(autoScroll); // Stop automatic scrolling when using buttons
  moveToNextSlide();
});
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

function createParticles() {
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`,
      speedX: Math.random() * 3 - 1.5,
      speedY: Math.random() * 3 - 1.5
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(particle => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.closePath();

    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
      particle.x = Math.random() * canvas.width;
      particle.y = Math.random() * canvas.height;
    }
  });
  requestAnimationFrame(drawParticles);
}

createParticles();
drawParticles();
window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});

function followTwitter(){
    location.href = "https://twitter.com/tiny_kiri?S=20"
}
function followInsta(){
    location.href = "https://instagram.com/tiny.kiri?igshid=OGQ5ZDc2ODk2ZA=="
}
