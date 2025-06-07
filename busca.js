// busca.js

// Mostrar mensaje cuando se hace click en el icono 🔍
document.getElementById('boton-buscar').addEventListener('click', () => {
  alert('Busca lo que quieras');
  document.getElementById('buscador').focus();
});

// Función para filtrar juegos según lo que escriba el usuario
document.getElementById('buscador').addEventListener('input', (e) => {
  const texto = e.target.value.toLowerCase();
  const productos = document.querySelectorAll('main.contenedor a');

  productos.forEach((producto) => {
    // Buscamos en el atributo data-nombre que tiene el nombre y descripción
    const nombre = producto.getAttribute('data-nombre');
    if (nombre.includes(texto)) {
      producto.style.display = 'block';
    } else {
      producto.style.display = 'none';
    }
  });
});
