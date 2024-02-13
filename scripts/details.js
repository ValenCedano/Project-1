
const URL_BASE = "https://project-1-dev-qqhq.1.us-1.fl0.io/";
const idProducto = JSON.parse(localStorage.getItem("idProduct"))
console.log(idProducto);
const contenedorImagen = document.getElementById('galeria');
console.log(contenedorImagen);


const imagenPrincipal = document.querySelector('.imagen-principal');
const imagenSecundaria = document.querySelector('.imagenes-secundarias'); // Utiliza querySelector para seleccionar por clase
const nombreJoyeria = document.getElementsByClassName('menu-chiquito');
const circulos = document.querySelector('.circles');
const tallas = document.getElementsByClassName("Tallas");

const titulo = document.getElementsByClassName('title');
const code = document.getElementsByClassName('code');
const precio = document.getElementsByClassName('price');


const cambiarNombre = (nombre) => {
    const a = nombreJoyeria[0];
    const hijosMenu = a.children;
    hijosMenu[2].innerText = nombre;
}

const getproducts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
const pasarDeObjectArray = (objeto) => {
    let objetosArray = [];
    for (let i = 0; i < objeto.length; i++) {
        objetosArray.push(objeto[i]);
    }

    return objetosArray;
};

const insertarPrincipal = (urlimg) => {
    const imagenPrincipal = document.querySelector('.imagen-principal');
    imagenPrincipal.innerHTML = "";
    const figura = document.createElement('figure');
    const imagen = document.createElement('img');
    imagen.src = urlimg;
    imagen.alt = 'Imagen principal';
    figura.appendChild(imagen);
    imagenPrincipal.appendChild(figura);
};


insertarPrincipal('/assets/imagen_anillo_naranja.png');



const insertarSecundarias = (url) => {
    const figura = document.createElement('figure');
    const imagen = document.createElement('img');
    imagen.src = url;
    imagen.alt = 'Imagen secundaria';
    figura.appendChild(imagen);
    imagenSecundaria.appendChild(figura);
};

const insertarCirculos = (objetocolor) => {
    circulos.innerHTML += "";
    const circulo = document.createElement('p');
    circulo.className = 'circle';
    circulo.style.backgroundColor = objetocolor;
    circulos.appendChild(circulo);
};

const text= document.querySelector('#numero');
let contador = 0;
text.innerHTML = contador;

const sumar = () => {
    contador++;
    text.innerHTML= contador;
}

const restar = () => {
    if(contador > 0){
        contador--;
        text.innerHTML= contador;
    }
}

const cambiarDetalles = (contenedor,texto) => {
    contenedor[0].textContent = texto;
}

const guardarProductoAlCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const condicion1 = productoSeleccionado.tipoAccesorio == "anillo" && productoAComprar.cantidad && productoAComprar.color && productoAComprar.talla
    const condicion2 = productoSeleccionado !== "anillo" && productoAComprar.cantidad && productoAComprar.color
    if (condicion1 || condicion2) {
      carrito.push(productoAComprar);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      alert("No se ha escogido un color, cantidad o talla")
    }
}
  



document.addEventListener("DOMContentLoaded", async () => {
    const url = `${URL_BASE}productos`;
    const productos = await getproducts(url);
    // Cambiando para el producto especifico //
    
    const menuChiquito = cambiarNombre(productos[idProducto - 1].nombre);
    const tituloNuevo = cambiarDetalles(titulo, productos[idProducto - 1].nombre);
    const codeNuevo = cambiarDetalles(code, productos[idProducto - 1].codigo);
    const precioNuevo = cambiarDetalles(precio, productos[idProducto - 1].precio_unitario);
    const stock = productos[idProducto - 1].stock;
    
    let coloresInsertados = new Set();
    
    // Iterar sobre el objeto stock
    for (let i = 0; i < stock.length; i++) {
        console.log(stock[i].color);
        // Verificar si el color ya ha sido insertado
        if (!coloresInsertados.has(stock[i].color)) {
            // Insertar el círculo del color si no se ha insertado antes
            insertarCirculos(stock[i].color);
            // Agregar el color al conjunto
            coloresInsertados.add(stock[i].color);
        }
    }

    //Ingresando imagenes según el producto especificado
    const imagenesPequeñas = productos[idProducto - 1].imagen;
    const imgArray = pasarDeObjectArray(imagenesPequeñas);

    imgArray.forEach((elemento) => {
        insertarSecundarias(elemento);
    });

    const imags = document.querySelectorAll('.imagenes-secundarias img');
    imags.forEach((imagen) => {
        imagen.addEventListener('click', () => { 
            console.log('Has oprimido la imagen');
            const urlImagenPequeña =imagen.getAttribute("src");
            insertarPrincipal(urlImagenPequeña);
        });
    });

    insertarPrincipal(imgArray[0]);
    //cierre
   

    for (let i = 0; i < stock.length; i++) {
        // Verificar si el objeto en el stock tiene el atributo 'tallas'
        if (stock[i].hasOwnProperty('talla')) {
           return tallas;
        } else {
            return tallas[0].remove();
        }
    };



    

    
   
        
    
    //Terminacion



    //Detalles ciruclos

});







