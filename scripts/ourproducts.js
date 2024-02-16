//Función que permita obtener los productos desde la API

const URL_BASE= "https://project-1-dev-qqhq.1.us-1.fl0.io/";

//Obtener los productos

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

const pasarDeObjectArray = (objeto) =>{
  let objetosArray = [];
  for (let i=0 ; i<objeto.length; i++){
    objetosArray.push(objeto[i]);
  }

  return objetosArray;
};
/////

function searchByName(searchTerm, productsList) {
  const filtro = productsList.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filtro;
};

document.addEventListener("DOMContentLoaded", async() =>{
  const url= `${URL_BASE}productos`
  const productos = await getproducts(url);
  console.log(productos)

  const searchImput = document.getElementById("search-input");
  console.log("aqui va", searchImput)

  insertarProductos(contenedorProductos,productos);
  const figuras = contenedorProductos.getElementsByTagName("figure");
  const arrayProductos = pasarDeObjectArray(figuras);


  searchImput.addEventListener("keypress", (event) => {
    const searchTerm = event.target.value;
    if (searchTerm.length > 3) {
      //Se ejecuta la función de busqueda: 
      const productsList = searchByName(searchTerm, productos);
      console.log(productsList)
      insertarProductos(contenedorProductos, productsList);
    }
  
    if (searchTerm.length === 0) {
      insertarProductos(contenedorProductos, productos);
    }
  });
  arrayProductos.forEach((elemento) =>{
    elemento.addEventListener(("click"), ()=>{
      const idProduct = elemento.id;
      localStorage.setItem("idProduct", JSON.stringify(idProduct));
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


});















