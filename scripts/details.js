const contenedorImagen = document.getElementById('galeria');
console.log(contenedorImagen);


const imagenPrincipal = document.querySelector('.imagen-principal'); // Utiliza querySelector para seleccionar por clase
console.log(imagenPrincipal);
const nombreJoyeria = document.getElementsByClassName('menu-chiquito');

let imagenGrandote;
const insertarPrincipal = (imagen_ruta) =>{
    const imagenPrincipal = document.querySelector('.imagen-principal');
    imagenPrincipal.innerHTML = "";
    const figura = document.createElement('figure');
    console.log(figura);
    
    const imagen = document.createElement('img');
    imagen.src = imagen_ruta;
    imagen.alt = 'Imagen principal';
    figura.appendChild(imagen);
    imagenPrincipal.appendChild(figura);
};


insertarPrincipal("/assets/products/coleccion1.png");


const cambiarNombre = (nombre) =>{
    const a = nombreJoyeria[0];
    const hijosMenu = a.children;
    hijosMenu[2].innerText = nombre
}


cambiarNombre("mu")