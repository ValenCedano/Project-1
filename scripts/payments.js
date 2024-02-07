const nombreRegex = /^[a-zA-Z\s]+$/; // Solo letras y espacios
const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato de correo electrónico
const telefonoRegex = /^\d{10}$/; // 10 dígitos
const direccionRegex = /.+/; // Cualquier cosa

const validarYMostrarDatos = () => {
  if (validarFormulario()) {
    mostrarDatos();
  }
  alert("Su proceso de pago ha sido exitoso, le notificaremos la guia en su correo electrónico")
};

const validarFormulario = () => {
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const direccion = document.getElementById('direccion').value.trim();

  const nombreError = document.getElementById('nombreError');
  const correoError = document.getElementById('correoError');
  const telefonoError = document.getElementById('telefonoError');
  const direccionError = document.getElementById('direccionError');

 
  nombreError.textContent = !nombreRegex.test(nombre) ? 'The name can only contain letters and spaces.' : '';

  correoError.textContent = !correoRegex.test(correo) ? 'The email is invalid.' : '';

  telefonoError.textContent = !telefonoRegex.test(telefono) ? 'The phone number must exactly 10 digits.' : '';

  direccionError.textContent = !direccionRegex.test(direccion) ? 'Address is mandatory.' : '';

  return (nombreRegex.test(nombre) && correoRegex.test(correo) && telefonoRegex.test(telefono) && direccionRegex.test(direccion));
};

const mostrarDatos = () => {
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const direccion = document.getElementById('direccion').value.trim();

  console.log("Nombre:", nombre);
  console.log("Correo Electrónico:", correo);
  console.log("Número de Teléfono:", telefono);
  console.log("Dirección:", direccion);
};