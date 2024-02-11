

let contenedorProductos = document.getElementById("image-collection");
console.log(contenedorProductos);


const insertarProductos = (contenedor, listaProductos) => {
  contenedor.innerHTML = "";
  listaProductos.forEach((producto) => {
    if(producto.id == 9){
      contenedor.innerHTML += 
      `<figure style ="width:576px; height:826px" id="${producto.id}">
      <img src=${producto.imagen[0]} style ="height:726px">
      <span>${producto.nombre}</span>
      <h6>${producto.precio_unitario}</h6>
      </figure>`;
    }
    else{
      contenedor.innerHTML += `
            <figure id="${producto.id}">
                <img src=${producto.imagen[0]} >
                <span>${producto.nombre}</span>
                <h6>${producto.precio_unitario}</h6>
            </figure>
            
        `;
    }
 });
};


insertarProductos(contenedorProductos,productos);

const hijitos = document.getElementsByTagName('figure');

const childNodes = [];
for ( elemento of contenedorProductos.children){
  childNodes.push(elemento);

}
console.log(childNodes[0])

console.log(childNodes);


childNodes.forEach(figurata => {
  figurata.addEventListener("click", () =>{
    const idProducto = figurata.id;
    console.log(idProducto);
    const hijosFigura= figurata.children;
    const primerhijo = hijosFigura[0].attributes;
    
  });
});








