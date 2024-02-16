
const URL_BASE = "https://project-1-dev-kxpm.1.us-1.fl0.io/";
const nombrePersona = document.getElementById("persona");

const total = document.getElementsByClassName("formato2");
const orden = total[0];
const precioTotal = total[1];
console.log(nombrePersona);
orden.innerHTML = '12345678';
precioTotal.innerHTML = '$567';
// Obtener la fecha actual del navegador
var fecha = new Date();

// Formatear la fecha como una cadena legible
// Formatear la fecha como "dd/mm/yyyy"
var dia = fecha.getDate().toString().padStart(2, '0');
var mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Sumar 1 porque en JavaScript los meses empiezan desde 0
var año = fecha.getFullYear();

// Construir la cadena de fecha en formato "dd/mm/yyyy"
var fechaFormateada = dia + '/' + mes + '/' + año;

// Mostrar la fecha en el elemento con id "fecha"
document.getElementById("formato2").innerHTML = fechaFormateada;



