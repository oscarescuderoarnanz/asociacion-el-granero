const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const original = button.innerHTML;
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.innerHTML = 'Número copiado ✓';
      setTimeout(() => { button.innerHTML = original; }, 1800);
    } catch {
      button.innerHTML = 'Selecciona el número para copiarlo';
    }
  });
});

const carousel = document.querySelector('.carousel');
if (carousel) {
  const track = carousel.querySelector('.carousel-track');
  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  const dots = carousel.querySelector('.carousel-dots');
  const counter = carousel.querySelector('.carousel-counter');
  let currentSlide = 0;

  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Ver foto ${index + 1}`);
    dot.addEventListener('click', () => showSlide(index));
    dots.appendChild(dot);
  });

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.querySelectorAll('.carousel-dot').forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === currentSlide);
    });
    counter.textContent = `${currentSlide + 1} / ${slides.length}`;
  }

  carousel.querySelector('.carousel-prev').addEventListener('click', () => showSlide(currentSlide - 1));
  carousel.querySelector('.carousel-next').addEventListener('click', () => showSlide(currentSlide + 1));
  showSlide(0);
}
