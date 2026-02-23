const botoes = document.querySelectorAll(".comprar");

botoes.forEach((btn) => {
  btn.addEventListener("click", () => {
    const produto = btn.parentElement.querySelector("h3").innerText;
    alert(`🛒 ${produto} adicionado ao carrinho!\n(Projeto educacional)`);
  });
});