const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Botão topo
const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
  btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const menuToggle = document.getElementById("menuToggle");
const menuLateral = document.getElementById("menuLateral");

menuToggle.addEventListener("click", () => {
  menuLateral.classList.toggle("ativo");
});