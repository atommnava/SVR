// Menú hamburguesa
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// CTA
document.getElementById('cta-btn').addEventListener('click', () => {
  alert("¡Gracias por comprometerte! Recibirás guía de acciones");
});

// Contador dinámico
let count = 0;
setInterval(() => {
  let random = Math.floor(Math.random() * 150) + 50;
  count += random;
  document.getElementById('counter').innerText = count + " kg";
}, 2000);

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
});

reveals.forEach(el => observer.observe(el));