
const URL_BASE = "https://project-1-dev-qqhq.1.us-1.fl0.io/";
const idProducto = JSON.parse(localStorage.getItem("idProduct"))
console.log(idProducto);
const contenedorImagen = document.getElementById('galeria');
console.log(contenedorImagen);

const imagenPrincipal = document.querySelector('.imagen-principal');
const imagenSecundaria = document.querySelector('.imagenes-secundarias'); // Utiliza querySelector para seleccionar por clase
const nombreJoyeria = document.getElementsByClassName('menu-chiquito');
const circulos = document.querySelector('.circles');
console.log(circulos.children);
const tallas = document.getElementsByClassName("Tallas");
const titulo = document.getElementsByClassName('title');
const code = document.getElementsByClassName('code');
const precio = document.getElementsByClassName('price');
const colores = document.getElementsByClassName('color');
const enviarInfo = document.getElementsByClassName('boton-img');
const apiUrl = 'https://project-1-dev-qqhq.1.us-1.fl0.io/Carrito';
console.log(enviarInfo[0]);


const cambiarNombre = (nombre) => {
    const a = nombreJoyeria[0];
    const hijosMenu = a.children;
    hijosMenu[2].innerText = nombre;
}

const getproducts = async (url,id) => {
    try {
        const response = await fetch(`${url}/${id}`);
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
    circulo.setAttribute("name", objetocolor);
    circulo.style.backgroundColor = objetocolor;
    circulos.appendChild(circulo);
};

const cambiarDetalles = (contenedor,texto) => {
    contenedor[0].textContent = texto;
}

  

let producto;

const productoAlCarrito = {};
/*
const guardarProductoAlCarrito = async(url) => {// URL de tu API
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productoAlCarrito)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};
*/

function guardarProductoAlCarrito() {
    let productosAlCarrito = localStorage.getItem('productosAlCarrito');

    // If there are existing products in the cart, parse them from JSON
    if (productosAlCarrito) {
        productosAlCarrito = JSON.parse(productosAlCarrito);
        
        // Check if the current product already exists in the cart
        const existingProductIndex = productosAlCarrito.findIndex(item => 
            item.producto.nombre === productoAlCarrito.producto.nombre &&
            item.color === productoAlCarrito.color &&
            item.talla === productoAlCarrito.talla
        );

        // If the product already exists, update its quantity
        if (existingProductIndex !== -1) {
            productosAlCarrito[existingProductIndex].cantidad = productoAlCarrito.cantidad;
        } else {
            // If the product doesn't exist, add it to the cart
            productosAlCarrito.push(productoAlCarrito);
        }
    } else {
        // If there are no existing products, initialize the array with the current product
        productosAlCarrito = [productoAlCarrito];
    }

    // Save the updated array back to localStorage
    localStorage.setItem('productosAlCarrito', JSON.stringify(productosAlCarrito));
}
document.addEventListener("DOMContentLoaded", async () => {
    
    const url = `${URL_BASE}productos`;
    producto = await getproducts(url,idProducto);
    // Cambiando para el producto especifico //
    productoAlCarrito.producto = {
        nombre: producto.nombre,
        imagen: producto.imagen,
        codigo: producto.codigo,
        precio: producto.precio_unitario
    }
    
    const menuChiquito = cambiarNombre(producto.nombre);
    const tituloNuevo = cambiarDetalles(titulo, producto.nombre);
    const codeNuevo = cambiarDetalles(code, producto.codigo);
    const precioNuevo = cambiarDetalles(precio, producto.precio_unitario);

    const stock = producto.stock;
    const buton = document.getElementsByClassName('boton')
    let palabra = document.getElementById('numero');
    palabra.innerHTML= 0;
    const botones = Array.from(buton);
    let numeroFinal=0;
    
    botones.forEach((elemento) => {
        elemento.addEventListener("click", async() => {
            const accion = elemento.getAttribute('operacion');
            if (accion === "sumar") {
                numeroFinal = numeroFinal + 1;
            } else if (accion === "restar" & numeroFinal>0) {
                numeroFinal = numeroFinal- 1 ;
            }
            
            console.log("Número final del contador:", numeroFinal);
            palabra.innerText = numeroFinal;

            
            productoAlCarrito.cantidad =numeroFinal;
            guardarProductoAlCarrito();
            
            
        });
        
        
    });

    

    
    //Ingresando imagenes según el producto especificado
    const imagenesPequeñas = producto.imagen;
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
    
    
    
    
    let coloresInsertados = new Set();
    // Iterar sobre el objeto stock
    for (let i = 0; i < stock.length; i++) {
        console.log(stock[i].color);
        if (!coloresInsertados.has(stock[i].color)) {
            insertarCirculos(stock[i].color);
            coloresInsertados.add(stock[i].color);
        }
    }
    
    const coloresButtom = Array.from(circulos.children);
    coloresButtom.forEach((elemento) => {
        elemento.addEventListener(("click"), ()=> {
            productoAlCarrito.color = elemento.getAttribute("name");
            console.log(productoAlCarrito);
        });
    });

    
    enviarInfo[0].addEventListener(("click"), ()=> {
        location.href= '../pages/payments.html';
    });
    const tallasButtom = Array.from(tallas[0].children)
    for (let i = 0; i < stock.length; i++) {
        // Verificar si el objeto en el stock tiene el atributo 'tallas'
        if (stock[i].hasOwnProperty('talla')) {
            tallasButtom.forEach((elemento) => {
                elemento.addEventListener(("click"), ()=> {
                    productoAlCarrito.talla = elemento.getAttribute("text");
                    console.log(productoAlCarrito);
                });
            });
            return tallas[0];
        } else {
            return tallas[0].remove();
        }
    
    };
    
    
    
    


});









