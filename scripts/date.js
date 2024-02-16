
const URL_BASE = "https://project-1-dev-fnbg.3.us-1.fl0.io/";
const nombrePersona = document.getElementById("persona");
const sectionDetallesProducto = document.getElementsByClassName("registroUnidad");
const botonSeguirComprando = document.getElementsByClassName("botonShop");
console.log(sectionDetallesProducto);
function generarNumeroAleatorio(longitud) {
    let numero = '';
    for (let i = 0; i < longitud; i++) {
        numero += Math.floor(Math.random() * 10); // Genera un dígito aleatorio del 0 al 9
    }
    return numero;
}

const total = document.getElementsByClassName("formato2");
const orden = total[0];
const precioTotal = total[1];


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
const insertarProductosFinal = (contenedor,lista) =>{
    contenedor.innerHTML = "";
    contenedor.innerHTML += `<h5> Order line</h5>`
    
    lista.forEach((elemento) =>{
        
        const imagenProducto = elemento.producto.imagen[0];
        const nombre  = elemento.producto.nombre;
        const codigo = elemento.producto.codigo;
    
        const cantidad = Number(elemento.cantidad);
  
        const precioTotal = elemento.producto.precio;
      
        const totali = Number(cantidad*precioTotal);

        contenedor.innerHTML += `
        <div class="producto">
        <div class="producIzq">
        <img src="${imagenProducto}">
        <div class="caja-info">
        <h4>${nombre}</h4>
        <p>Code: ${codigo}</p>
        <p class="circulox1" >
        x${cantidad}
        </p>
        </div>
        </div>
        <p class="derecho">$${totali}</p>
        </div>`;

        botonSeguirComprando[0].addEventListener(("click"), () =>{
            location.href= '../pages/products.html';
        })
        
    });
    

    

        
    
};



const getproducts = async (url) => {
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
document.addEventListener("DOMContentLoaded", async () => {
    
    const url = `${URL_BASE}orden`;
    producto = await getproducts(url);
    infoVentaFinal = producto[0];
    nombrePersona.innerText = infoVentaFinal.nombre;
    console.log(producto[0].nombre)
    orden.innerHTML = `${generarNumeroAleatorio(8)}`;
    let contador=0;
    infoVentaFinal.carrito.forEach((producto) => {
        
        const precioUnidad = Number(producto.producto.precio);
        const cantidad = Number(producto.cantidad);
        const totalProducto = precioUnidad * cantidad;
        contador = contador + totalProducto;
        
    });
    precioTotal.innerHTML = `$${contador.toFixed(2)}`;
    const listaOrden = infoVentaFinal.carrito;
    
    insertarProductosFinal(sectionDetallesProducto[0],listaOrden)
    
    
});




