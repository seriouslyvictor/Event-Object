const mainSqr = document.getElementById("key--id");
const colorPals = document.querySelectorAll("span");

colorPals.forEach((el) => {
  el.addEventListener("click", alterarCor);
});
document.body.addEventListener("keydown", detectarTecla);

function detectarTecla(e) {
  e.preventDefault();
  console.log(e);
  mainSqr.textContent = e.key;
}

function alterarCor(e) {
  console.log(e);
  const corSelecionada = window.getComputedStyle(e.target).backgroundColor;
  mainSqr.style.backgroundColor = corSelecionada;
}
