const cartButton = document.getElementById("btnCard");
const modal = document.querySelector(".modalCart");
const sectionModal = document.querySelector(".productosCarrito");
const closeButton = document.getElementById("closeModal")
const precioTotal = document.getElementsByClassName("totalCompra");
const totali = document.getElementsByClassName("precio");
const infoFinal = document.getElementsByClassName("infoFinal");
const precioTotalArray = Array.from(precioTotal);
// Obtener los datos del Local Storage
//const datosLocalStorage = [];
const datosLocalStorage = JSON.parse(localStorage.getItem("productosAlCarrito"));
const precioFijo = [];

const insertarProductosModal = (contenedor, listaProductos) => {
    contenedor.innerHTML = "";
    let numero=0;
    listaProductos.forEach((producto) => {
        contenedor.innerHTML += `
        <div class="producto">
        <div class="producIzq">
        <img src= ${producto.producto.imagen[0]}>
        <div class="caja-info">
        <h4>${producto.producto.nombre}</h4>
        <p>${producto.producto.codigo}</p>
        <p class="derecho">${producto.producto.precio}</p>
        </div>
        </div>
        
        <div class="edicion">
            <img class="editar" name= "${numero}" src="../assets/Button6modal.png">
            <p class="circulox1" idnum= "${numero}" >
            ${producto.cantidad}
        </p>
            
        </div>
        
        </div>
       
        `
        numero++;
         
    });

    let contador=0;
    listaProductos.forEach((producto) => {
        
        let  priceProducto= Number(producto.producto.precio);
        console.log(priceProducto);
        let cantidad = Number(producto.cantidad);
        console.log(cantidad)
        const totalPrice = (priceProducto) * (cantidad);
        console.log(totalPrice);
        contador = contador + totalPrice ;
        
        
    });
    precioFijo.push(contador.toFixed(2));
 
    

};

const insertarFinal = (contenedor,price) =>{
    
    
    contenedor.innerHTML ="";
    contenedor.innerHTML += `
    <div class="infoFinal">
    <div class="totalCompra">
    <p class="letra"> Total: </p>
    <p class="precio">$${price} </p>
    </div>
    <button class="onclick">Continue to check out</button>
    </div>
    `
};


const precioProduct = document.getElementsByClassName("derecho");
const clickBoton = document.getElementsByClassName("onclick");
const editarCantidad = document.getElementsByClassName("editar");
const numeroEditado = document.getElementsByClassName("circulox1");
const toggleModal = (button, modal) => {

    button.addEventListener("click", () => {
    
        insertarProductosModal(sectionModal, datosLocalStorage);
        insertarFinal(infoFinal[0],precioFijo[0]);
        modal.classList.toggle("show");
        modal.classList.toggle("hidden");
        const botonEnviar = clickBoton[0];
        const edicionProducto = Array.from(editarCantidad);
        console.log(edicionProducto);
        console.log(numeroEditado)
        const numeroEditado2 = Array.from(numeroEditado);
        
        if (!datosLocalStorage || datosLocalStorage.length === 0) {
            // El localStorage está vacío o no contiene datos bajo la clave "productosAlCarrito"
            console.log("No hay productos en el carrito");
            sectionModal.textContent = "Carrito vacío";

            cartButton.addEventListener("click", () => {
                toggleModal(cartButton, modal);
            });
        
            clickBoton[0].addEventListener("click", () => {
                alert("No hay ningún producto agregado");
                location.href= '../pages/details.html';
            });
        } else {
            toggleModal(cartButton, modal);
            
            
        };
        

        edicionProducto.forEach((elemento) => {
            elemento.addEventListener("click", ()=>{
                console.log(elemento.getAttribute("name"))
                let cantidadNueva = prompt("Inserte la cantidad nueva:");
                for (let i=0; i<numeroEditado2.length ; i++) {
                    if(numeroEditado2[i].getAttribute("idnum") === elemento.getAttribute("name")){
                        numeroEditado2[i].innerHTML = cantidadNueva;
                        datosLocalStorage[i].cantidad = cantidadNueva
                        console.log(numeroEditado2[i]);
                    }
                };
                
                
            
            });
            
        });

       
        

        botonEnviar.addEventListener(("click"), ()=>{
            localStorage.setItem("productosAlCarrito", JSON.stringify(datosLocalStorage));
            location.href= '../pages/payments.html';
        });

        
    });
};

toggleModal(cartButton,modal);
toggleModal(closeButton,modal);




