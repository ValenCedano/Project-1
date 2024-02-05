// Entrega Sprint #3
// • Declarar una lista de los productos con los siguientes datos: id, nombre, código, precio
// unitario, tipo de accesorio (anillo, brazalete, collar, aretes, etc.), imágenes, descripción,
// cantidad en stock por color y/o talla.

const productos = [
   {
      id : 1,
      nombre : 'Luxury Gems Necklace',
      codigo : '',
      precio_unitario : '168.76',
      tipo_de_accesorio : 'collar',
      imagen :['/assets/products/coleccion1.png'],
      descripcion : 'collar de plata con diamante moissanite',
      stock: [
         { color: 'plata', talla: 6, cantidad: 23 },
         { color: 'plata', talla: 7, cantidad: 18 },
         { color: 'plata', talla: 8, cantidad: 44 }
     ]
   },
   {
      id : 2,
      nombre : 'Aurora Ring',
      codigo : '',
      precio_unitario: '125.28',
      tipo_de_accesorio : 'gargantilla',
      imagen:['/assets/products/coleccion2.png'],
      descripcion : 'gargantilla en oro laminado con mini cristales',
      stock: [
         { color: 'plata', cantidad: 54 },
         { color: 'oro', cantidad: 43 },
         { color: 'acero', cantidad: 20 }
     ]
   },
   
   {
      id : 3,
      nombre : 'Reflections Necklace',
      codigo : '',
      precio_unitario : '620.73',
      tipo_de_accesorio : 'brazalete',
      imagen :['/assets/products/coleccion3.png'],
      descripcion : 'brazalete tejido en hilo',
      stock: [
         { color: 'plata', cantidad: 16 },
         { color: 'oro', cantidad: 24 },
         { color: 'acero', cantidad: 31 }
     ]
   },
   
   {
      id : 4,
      nombre : 'Dreamy Infinity Ring',
      codigo : '',
      precio_unitario : '327.71',
      tipo_de_accesorio : 'anillo',
      imagen :['/assets/products/coleccion4.png'],
      descripcion : 'anillo con piedra amethist y mini cristales',
      stock: [
         { color: 'plata', talla: 6, cantidad: 23 },
         { color: 'plata', talla: 7, cantidad: 18 },
         { color: 'plata', talla: 8, cantidad: 44 },
         { color: 'oro', talla: 6, cantidad: 43 },
         { color: 'oro', talla: 7, cantidad: 25 },
         { color: 'oro', talla: 8, cantidad: 12 }

     ]
   },
   
   {
      id : 5,
      nombre : 'Opulent Jewels Ring',
      codigo : '',
      precio_unitario : '168.76',
      tipo_de_accesorio : 'anillo',
      imagen :['/assets/products/coleccion5.png'],
      descripcion : 'anillo en oro blanco y oro dorado',
      stock: [
         { color: 'plata', talla: 6, cantidad: 19 },
         { color: 'plata', talla: 7, cantidad: 21 },
         { color: 'plata', talla: 8, cantidad: 45 },
         { color: 'oro', talla: 6, cantidad: 22 },
         { color: 'oro', talla: 7, cantidad: 18 },
         { color: 'oro', talla: 8, cantidad: 19 }

     ]
   },
   
    {
       id : 6,
       nombre : 'Serene Solitaire Earrings',
       codigo : '',
       precio_unitario : '125.28',
       tipo_de_accesorio : 'aretes',
       imagen :['/assets/products/coleccion6.png'],
       descripcion : 'aretes con piedra azurite',
       stock: [
         { color: 'plata', cantidad: 29 },
         { color: 'oro', cantidad: 17 },
         { color: 'acero', cantidad: 33 }
     ]
    },
   
    {
       id : 7,
       nombre : 'Timeless Halo Earrings',
       codigo : '',
       precio_unitario : '620.73',
       tipo_de_accesorio : 'aretes',
       imagen :['/assets/products/coleccion7.png'],
       descripcion : 'aretes con cristal',
       stock: [
         { color: 'plata', cantidad: 27 },
         { color: 'oro', cantidad: 34 },
         { color: 'acero', cantidad: 18 }
     ]
    },
   
    {
       id : 8,
       nombre : 'Exquisite Earrings',
       codigo : '',
       precio_unitario : '327.71',
       tipo_de_accesorio: 'aretes',
       imagen :['/assets/products/coleccion8.png'],
       descripcion : 'aretes con cristal en gota',
       stock: [
         { color: 'plata', cantidad: 27 },
         { color: 'oro', cantidad: 34 },
         { color: 'acero', cantidad: 18 }
     ]
    },
   
    {
       id : 9,
       nombre: 'Timeless Elegance Ring',
       codigo : '',
       precio_unitario : '168.76',
       tipo_de_accesorio : 'anillo',
       imagen :['/assets/imagen_anillo_azul.png'],
       descripcion : 'trio de anillos con piedras preciosas',
       stock: [
         { color: 'plata', talla: 6, cantidad: 22 },
         { color: 'plata', talla: 7, cantidad: 15 },
         { color: 'plata', talla: 8, cantidad: 32 },
         { color: 'oro', talla: 6, cantidad: 21 },
         { color: 'oro', talla: 7, cantidad: 21 },
         { color: 'oro', talla: 8, cantidad: 19 }

     ]
    },
   
    {
       id : 10,
       nombre : 'Luxury Charms Ring',
       codigo : '',
       precio_unitario : '620.73',
       tipo_de_accesorio : 'anillo',
       imagen :['/assets/imagen_anillo_naranja.png'],
       descripcion: 'anilo con piedra camellian',
       stock: [
         { color: 'plata', talla: 6, cantidad: 30 },
         { color: 'plata', talla: 7, cantidad: 15 },
         { color: 'plata', talla: 8, cantidad: 26 },
         { color: 'oro', talla: 6, cantidad: 22 },
         { color: 'oro', talla: 7, cantidad: 15 },
         { color: 'oro', talla: 8, cantidad: 18 }

     ]
    },

    {
      id : 11,
      nombre : 'Blissful Bloom Ring',
      codigo : '',
      precio_unitario : '620.73',
      tipo_de_accesorio : 'anillo',
      imagen :['/assets/Blisfull.png'],
      descripcion : 'anillo en hojas',
      stock: [
         { color: 'plata', talla: 6, cantidad: 30 },
         { color: 'plata', talla: 7, cantidad: 15 },
         { color: 'plata', talla: 8, cantidad: 26 },
         { color: 'oro', talla: 6, cantidad: 22 },
         { color: 'oro', talla: 7, cantidad: 15 },
         { color: 'oro', talla: 8, cantidad: 18 }

     ]
   },

   {
      id : 12,
      nombre: 'Sparkling Ring',
      codigo : '',
      precio_unitario : '620.73',
      tipo_de_accesorio : 'anillo',
      imagen :['/assets/sparkgling.png'],
      descripcion : 'anillo con micro cristales ',
      stock: [
         { color: 'plata', talla: 6, cantidad: 54 },
         { color: 'plata', talla: 7, cantidad: 43 },
         { color: 'plata', talla: 8, cantidad: 20 }
     ]
   },

   {
      id : 13,
      nombre : 'Glimmering Ring',
      codigo : '',
      precio_unitario : '620.73',
      tipo_de_accesorio : 'anillo',
      imagen :['/assets/glimme.png'],
      descripcion : 'anillo delicado con murano ruso',
      stock: [
         { color: 'plata', talla: 6, cantidad: 30 },
         { color: 'plata', talla: 7, cantidad: 15 },
         { color: 'plata', talla: 8, cantidad: 26 },
         { color: 'oro', talla: 6, cantidad: 22 },
         { color: 'oro', talla: 7, cantidad: 15 },
         { color: 'oro', talla: 8, cantidad: 18 }

     ]
 },
    
    
];

/*


// • Crear una función que ordene un array de productos por precios de manera ascendente
// y descendente y retorne el array resultante. Ejecutar la función y mostrar el resultado en
// consola.

const ordenarPorPrecio = (productos, ascendente = true) => {
   const factorOrden = ascendente ? 1 : -1;
   return productos.slice().sort((precioA, precioB) => (precioA.precio_unitario - precioB.precio_unitario) * factorOrden);
};

const productosOrdenadosAscendente = ordenarPorPrecio(productos, true);
console.log("Productos ordenados por precio de manera ascendente:", productosOrdenadosAscendente);


const productosOrdenadosDescendente = ordenarPorPrecio(productos, false);
console.log("Productos ordenados por precio de manera descendente:", productosOrdenadosDescendente);

// • Crear una función que calcule el total a pagar de una compra, reciba como parámetros
// un array de productos donde cada producto, tenga como propiedades la cantidad y
// precio unitario del producto y devuelva el valor que corresponda a la sumatoria de la
// cantidad por el precio de cada producto. Ejecutar la función con datos de prueba y
// mostrar el resultado en la consola del navegador.

function calcularTotalCompra(productos) {
   const total = productos.reduce((acumulador, producto) => {
       return acumulador + (producto.cantidad * producto.precio_unitario);
   }, 0);

   return total;
}
const productosCompra = [
   { cantidad: 2, precio_unitario: 620.73 },
   { cantidad: 4, precio_unitario: 168.76 },
   { cantidad: 5, precio_unitario: 327.71 }
];


const totalCompra = calcularTotalCompra(productosCompra);
console.log("Total a pagar de la compra:", totalCompra)



//Funciones

// 1 Función. Filtra los accesiorios según el tipo que indique el usuario

const filtroTipo = (lista,tipo) => {
    tipo=tipo.toLowerCase();
    const filtro = lista.filter(lista => lista.tipo_de_accesorio === tipo) 
    return filtro;
}

console.log(filtroTipo(productos,'ANILLO'));

// 2 Función.  Realiza busqueda de productos por Nombre
function mayusculaPrimeraLetraDeOracion(oracion) {
    let palabras = oracion.split(" ").map(palabra => {
        return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
    })
    return palabras.join(" ");
}

const busquedaNombre = (lista, nombreProducto) =>{
    const filtro1 = lista.filter(lista => lista.nombre === nombreProducto);
    return filtro1;
}

const nombreProducto = prompt("Ingrese el producto a buscar: ");

console.log(busquedaNombre(productos,mayusculaPrimeraLetraDeOracion(nombreProducto)));
*/

