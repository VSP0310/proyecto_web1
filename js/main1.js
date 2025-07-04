const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/*validaciones de formulario*/
document.getElementById("formContacto").addEventListener("submit", function (e) {
  e.preventDefault();

  let valido = true;

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  const errorNombre = document.getElementById("errorNombre");
  const errorEmail = document.getElementById("errorEmail");
  const errorMensaje = document.getElementById("errorMensaje");

  // Validación nombre
  if (nombre.value.trim().length < 3) {
    errorNombre.textContent = "Por favor, introduce tu nombre (mínimo 3 letras)";
    valido = false;
  } else {
    errorNombre.textContent = "";
  }

  // Validación email
  const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!regexEmail.test(email.value.trim())) {
    errorEmail.textContent = "Introduce un correo válido";
    valido = false;
  } else {
    errorEmail.textContent = "";
  }

  // Validación mensaje
  if (mensaje.value.trim().length < 10) {
    errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres";
    valido = false;
  } else {
    errorMensaje.textContent = "";
  }

  if (valido) {
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
    this.reset();
  }
});