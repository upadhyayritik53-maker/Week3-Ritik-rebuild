// Simple animation on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    card.style.transform = "scale(1.05)";
  });
});
