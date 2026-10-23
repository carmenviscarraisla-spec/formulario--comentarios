const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputComentario = document.getElementById("comentario");
const errorNombre = document.getElementById("error-nombre");
const errorComentario = document.getElementById("error-comentario");
const contador = document.getElementById("contador");
const lista = document.getElementById("lista");
const total = document.getElementById("total");

const comentarios = [];

inputComentario.addEventListener("input", () => {
  contador.textContent = inputComentario.value.length;
});

function validar(nombre, texto) {
  let valido = true;
  errorNombre.textContent = "";
  errorComentario.textContent = "";

  if (nombre === "") {
    errorNombre.textContent = "Escribe tu nombre.";
    valido = false;
  }
  if (texto.length < 5) {
    errorComentario.textContent = "El comentario debe tener al menos 5 caracteres.";
    valido = false;
  }
  return valido;
}

function mostrarComentarios() {
  lista.innerHTML = "";

  if (comentarios.length === 0) {
    lista.innerHTML = "<li>Aún no hay comentarios.</li>";
  }

  comentarios.forEach((c) => {
    const li = document.createElement("li");
    const autor = document.createElement("strong");
    const texto = document.createElement("p");

    autor.textContent = c.nombre;
    texto.textContent = c.texto;

    li.append(autor, texto);
    lista.appendChild(li);
  });

  total.textContent = comentarios.length;
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = inputNombre.value.trim();
  const texto = inputComentario.value.trim();

  if (!validar(nombre, texto)) return;

  comentarios.push({
    nombre: nombre,
    texto: texto
  });

  mostrarComentarios();
  formulario.reset();
  contador.textContent = "0";
  inputNombre.focus();
});