
const URL_BASE= "https://project-1-dev-qqhq.1.us-1.fl0.io/";
const idProducto = JSON.parse(localStorage.getItem("idProduct"))
console.log(idProducto);

const contenedorImagen = document.getElementById('galeria');
console.log(contenedorImagen);


const imagenPrincipal = document.querySelector('.imagen-principal');
const imagenSecundaria = document.querySelector('.imagenes-secundarias'); // Utiliza querySelector para seleccionar por clase
console.log(imagenPrincipal);
console.log(imagenSecundaria);
const nombreJoyeria = document.getElementsByClassName('menu-chiquito');


const getproducts = async (url) => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch(error){
      console.log(error);
      return [];
    }
}


const insertarPrincipal = (urlimg) =>{
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


const insertarSecundarias = (urlimg) =>{
    imagenSecundaria.innerHTML = "";
    const figura = document.createElement('figure');
    console.log(figura);
    const imagen = document.createElement('img');
    imagen.src = urlimg;
    imagen.alt = 'Imagen principal';
    figura.appendChild(imagen);
    imagenSecundaria.appendChild(figura);
    
    
};


document.addEventListener("DOMContentLoaded", async() =>{
    const url= `${URL_BASE}productos`;
    const productos = await getproducts(url);
    
    const imagenesPequeñas= productos[idProducto-1].imagen;
    insertarPrincipal(imagenesPequeñas[0]);
    console.log(imagenesPequeñas[0]);
    console.log(imagenesPequeñas[1]);
    console.log(imagenesPequeñas[2]);
    insertarSecundarias('/assets/Imagenes chiquitas/Im 2 Infinity.jpeg');
})



const cambiarNombre = (nombre) =>{
    const a = nombreJoyeria[0];
    const hijosMenu = a.children;
    hijosMenu[2].innerText = nombre
}


cambiarNombre("mu")