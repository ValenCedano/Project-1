const filtroNavegador = document.getElementsByClassName("filtrar")
console.log(filtroNavegador)


let contenedorProductos = document.getElementById("image-collection");
console.log(contenedorProductos);


const filtroTipo = (lista,tipo) => {

  const filtro = lista.filter(lista => lista.tipo_de_accesorio == tipo) 
  return filtro;
}




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

console.log(typeof childNodes);


childNodes.forEach(figurata => {
  figurata.addEventListener("click", () =>{
    const idProducto = figurata.id;
    console.log(idProducto);
    const hijosFigura= figurata.children;
    const primerhijo = hijosFigura[0].attributes;
    localStorage.setItem("idProducto",JSON.stringify(idProducto));
    location.href= '../pages/details.html';
    
  });
});


const listaNav =[];
for (const elemento of filtroNavegador){
  listaNav.push(elemento);
}


// Agregar un eventListener a cada elemento HTML en listaNav
listaNav.forEach(elemento => {
  elemento.addEventListener("click", () =>{
    let nombreFiltrar = elemento.innerHTML;
    if (elemento.innerHTML == "All"){
      insertarProductos(contenedorProductos,productos); 
    }
    else{
      const productosFiltro = filtroTipo(productos,nombreFiltrar);
      console.log(productosFiltro);
      insertarProductos(contenedorProductos,productosFiltro);
    }
    
  });
});

const searchImput = document.getElementById("search-input");
console.log("aqui va", searchImput)
function searchByName(searchTerm, productsList) {
  const results = productsList.filter((productos) =>
    productos.tipo_de_accesorio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return results;
}

searchImput.addEventListener("keypress", (event) => {
  console.log("hecho")
  const searchTerm = event.target.value;
  if (searchTerm.length > 3) {
    //Se ejecuta la función de busqueda: 
    const productsList = searchByName(searchTerm, productos);
    insertarProductos(contenedorProductos, productsList);
  }

  if (searchTerm.length === 0) {
    insertarProductos(contenedorProductos, productos);
  }
});










