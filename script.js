<div class="menu-btn" onclick="toggleMenu()">☰</div>

<nav id="navMenu">
  <a href="#">Home</a>
  <a href="#">Services</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.style.transform = "scale(1.05)";
    }
  });
});
