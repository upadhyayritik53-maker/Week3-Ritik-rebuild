// Scroll Reveal Animation
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

// Button Interaction
document.getElementById("heroBtn").addEventListener("click", () => {
  alert("Welcome to AI + Vibe Coding 🚀");
});
