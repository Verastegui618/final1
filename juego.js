let puntos = 0;
let vidas = 10;
let tiempo = 10;
let intervalo;

const gato = document.getElementById("gato");
const tiempoSpan = document.getElementById("tiempo");
const puntosSpan = document.getElementById("puntos");
const vidasSpan = document.getElementById("vidas");

function iniciarJuego() {
  puntos = 0;
  vidas = 10;
  actualizarInfo();
  siguienteRonda();
}

function siguienteRonda() {
  gato.style.display = "none";
  tiempo = 10;
  actualizarInfo();
  posicionarGato();
  gato.style.display = "block";

  intervalo = setInterval(() => {
    tiempo--;
    actualizarInfo();
    if (tiempo <= 0) {
      perderVida();
    }
  }, 1000);
}

function posicionarGato() {
  const contenedor = document.getElementById("game-container");
  const maxX = contenedor.offsetWidth - 50;
  const maxY = contenedor.offsetHeight - 50;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  gato.style.left = `${x}px`;
  gato.style.top = `${y}px`;
}

gato.addEventListener("click", () => {
  puntos += 10;
  clearInterval(intervalo);
  actualizarInfo();
  siguienteRonda();
});

function perderVida() {
  clearInterval(intervalo);
  vidas--;
  if (vidas <= 0) {
    alert("😿 Fin del juego. Tu puntaje fue: " + puntos);
    gato.style.display = "none";
  } else {
    siguienteRonda();
  }
  actualizarInfo();
}

function actualizarInfo() {
  tiempoSpan.textContent = tiempo;
  puntosSpan.textContent = puntos;
  vidasSpan.textContent = vidas;
}
