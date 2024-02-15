document.addEventListener("DOMContentLoaded", function() {
  mostrarProductosEnCarrito();
  mostrarDetallesCarrito();
});

function sumarPreciosEnCarrito() {
  const carrito = obtenerProductosDelCarrito();
  let total = 0;

  carrito.forEach(producto => {
      total += producto.producto.precio * producto.cantidad;
  });

  return total;
}

function mostrarDetallesCarrito() {
  const totalProductosElement = document.getElementById('total-productos');
  const totalPagarElement = document.getElementById('total-pagar');

  const totalProductos = obtenerProductosDelCarrito().length;
  const totalPagar = sumarPreciosEnCarrito();

  totalProductosElement.textContent = totalProductos;
  totalPagarElement.textContent = `$${totalPagar.toFixed(2)}`;
}

function mostrarProductosEnCarrito() {
  const carrito = obtenerProductosDelCarrito();
  const carritoContainer = document.getElementById('carrito-container');
  carritoContainer.innerHTML = '';

  if (carrito.length === 0) {
      carritoContainer.innerHTML = '<p>No hay productos en el carrito</p>';
  } else {
      carrito.forEach((producto, index) => {
          const productoElement = document.createElement('div');
          productoElement.classList.add('producto');

          const imagenElement = document.createElement('img');
          imagenElement.src = producto.imagen;
          imagenElement.alt = producto.producto.nombre;
          productoElement.appendChild(imagenElement);

          const infoElement = document.createElement('div');
          infoElement.classList.add('info-producto');
          infoElement.innerHTML = `
              <p>Nombre: ${producto.producto.nombre}</p>
              <p>Precio: ${producto.producto.precio}</p>
              <p>Cantidad: ${producto.cantidad}</p>
          `;
          productoElement.appendChild(infoElement);

          const eliminarElement = document.createElement('button');
          eliminarElement.textContent = 'Eliminar';
          eliminarElement.addEventListener('click', () => {
              eliminarProductoDelCarrito(index);
          });
          productoElement.appendChild(eliminarElement);

          carritoContainer.appendChild(productoElement);
      });
  }

  mostrarDetallesCarrito();
}

function eliminarProductoDelCarrito(index) {
  let productosAlCarrito = obtenerProductosDelCarrito();
  productosAlCarrito.splice(index, 1);
  localStorage.setItem('productosAlCarrito', JSON.stringify(productosAlCarrito));
  mostrarProductosEnCarrito();
}

function obtenerProductosDelCarrito() {
  return JSON.parse(localStorage.getItem('productosAlCarrito')) || [];
}
// Llama a la función para mostrar los productos en el carrito cuando la página se carga
mostrarProductosEnCarrito();
const urlServidor = "http://localhost:3000/orden"; 

const nombreRegex = /^[a-zA-Z\s]+$/; // Solo letras y espacios
const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato de correo electrónico
const telefonoRegex = /^\d{10}$/; // 10 dígitos
const direccionRegex = /.+/; // Cualquier cosa
const tarjetaRegex = /^\d{16}$/; // 16 dígitos para el número de tarjeta
const cvcRegex = /^\d{3}$/; // 3 dígitos para el CVC

const validarYMostrarDatos = () => {
  if (validarFormulario()) {
    mostrarDatos();
  }
};

const enviarFormulario = () => {
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const direccion = document.getElementById('direccion').value.trim();
  const tarjeta = document.getElementById('tarjeta').value.trim();
  const cvc = document.getElementById('cvc').value.trim();

  const orden = {
    nombre: nombre,
    correo: correo,
    telefono: telefono,
    direccion: direccion,
    tarjeta: tarjeta,
    cvc: cvc,
    carrito:
    JSON.parse(localStorage.getItem("productosAlCarrito")) || []
  };
  const opcionesFetch = {
    method: 'POST',
    body: JSON.stringify(orden),
    headers: {
      'Content-Type': 'application/json'
    },
    
  };
  
  // Enviar la solicitud Fetch
  fetch(urlServidor, opcionesFetch)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ocurrió un error al enviar los datos al servidor.');
      }
      return response.json();
    })
    .then(data => {
      //GUARDAR DATA.ID EN EL LOCAL STORAGE Y DESPUES REDIRECCIONAR A LA PAGINA DE COMPRA EXITOSA
      console.log('Los datos se enviaron correctamente al servidor:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

}

const validarFormulario = () => {
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const direccion = document.getElementById('direccion').value.trim();
  const tarjeta = document.getElementById('tarjeta').value.trim();
  const cvc = document.getElementById('cvc').value.trim();

  const nombreError = document.getElementById('nombreError');
  const correoError = document.getElementById('correoError');
  const telefonoError = document.getElementById('telefonoError');
  const direccionError = document.getElementById('direccionError');
  const tarjetaError = document.getElementById('tarjetaError');
  const cvcError = document.getElementById('cvcError');

  nombreError.textContent = !nombreRegex.test(nombre) ? 'El nombre solo puede contener letras y espacios.' : '';
  correoError.textContent = !correoRegex.test(correo) ? 'El correo electrónico no es válido.' : '';
  telefonoError.textContent = !telefonoRegex.test(telefono) ? 'El número de teléfono debe tener 10 dígitos.' : '';
  direccionError.textContent = !direccionRegex.test(direccion) ? 'La dirección es obligatoria.' : '';
  tarjetaError.textContent = !tarjetaRegex.test(tarjeta) ? 'El número de tarjeta debe tener 16 dígitos.' : '';
  cvcError.textContent = !cvcRegex.test(cvc) ? 'El CVC debe tener 3 dígitos.' : '';
  
  

  if (nombreRegex.test(nombre) && correoRegex.test(correo) && telefonoRegex.test(telefono) && direccionRegex.test(direccion) && tarjetaRegex.test(tarjeta) && cvcRegex.test(cvc)){
    enviarFormulario()
  }else{
    return
  }
};





  
const mostrarDatos = () => {
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const direccion = document.getElementById('direccion').value.trim();
  const tarjeta = document.getElementById('tarjeta').value.trim();
  const cvc = document.getElementById('cvc').value.trim();

  console.log("Nombre:", nombre);
  console.log("Correo Electrónico:", correo);
  console.log("Número de Teléfono:", telefono);
  console.log("Dirección:", direccion);
  console.log("Número de Tarjeta:", tarjeta);
  console.log("Código de Seguridad (CVC):", cvc);
};
