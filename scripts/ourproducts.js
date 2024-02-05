

let contenedorProductos = document.getElementById("image-collection");
console.log(contenedorProductos);


const insertarProductos = (contenedor, listaProductos) => {
  contenedor.innerHTML = "";
  listaProductos.forEach((producto) => {
    if(producto.id == 9){
      contenedor.innerHTML += 
      `<figure style ="width:576px; height:826px" id="imagenes">
      <img src=${producto.imagen[0]} style ="height:726px">
      <span>${producto.nombre}</span>
      <h6>${producto.precio_unitario}</h6>
      </figure>`;
    }
    else{
      contenedor.innerHTML += `
            <figure id="imagenes">
                <img src=${producto.imagen[0]} >
                <span>${producto.nombre}</span>
                <h6>${producto.precio_unitario}</h6>
            </figure>
            
        `;
    }
 });
};


insertarProductos(contenedorProductos,productos);
const miau = document.querySelectorAll('#imagenes');
console.log(miau[0].innerText);
const muu = (miau[1].children);
muu[1].style.textTransform = 'uppercase';

console.log(muu[1].innerHTML)
if(muu[1].innerHTML === 'Luxury Gems Necklace'){
  console.log("YUJUUUU");
}

const hijitos = document.getElementsByTagName('figure');
console.log(hijitos);
const childNodes = [];
for ( elemento of contenedorProductos.children){
  childNodes.push(elemento);

}

console.log(childNodes);

childNodes.forEach(figurata => {
  figurata.addEventListener("click", () =>{

    location.href= '../pages/details.html';
  })
});




