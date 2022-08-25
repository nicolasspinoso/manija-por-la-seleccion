
/*class Producto {
    constructor(id, nombre, precio, img){
    this.id= id;
    this.nombre= nombre.toUpperCase();
    this.precio= precio;
    this.img = img;
   ;
    
    }
    precioFinal(){
        return parseFloat((this.precio*iva).toFixed(2))
    }
}


const productos=[]


function listadoProductos() {
 
        productos.push(new Producto(1,"Camiseta titular",10500, 2, `src/imagenes/camisetatitular.jfif`))
        productos.push(new Producto(2, "Camiseta suplente ",8500, 3, `src/imagenes/camisetasuplente.jfif`))
        productos.push(new Producto(3, "Short titular",5500, 5,`src/imagenes/shorttitular.png`))
        productos.push(new Producto(4, "Medias",3500, 6,`src/imagenes/medias.png`))
        productos.push(new Producto(5, "Pechera de entrenamiento",4500,  7,`src/imagenes/Pechera de entrenamiento.jpg`))
        productos.push(new Producto(6,"Calsa termica",6600, 8,`src/imagenes/Calsa termica.png`))
}

listadoProductos()
const containerDiv= document.querySelector(".container");
const carritoDiv = document.querySelector(".carrito");
//let carrito= JSON.parse(localStorage.getItem("carrito"))




function crearCards() {
   
    productos.forEach(prod=>{
        containerDiv.innerHTML +=`<div class=indumentaria>
       <h4>${prod.nombre}</h4>
       <p>$${prod.precio}</p>
       <button id="btn-agregar${prod.id}">Comprar</button>
       </div>`;

    });

    agregarFunconalidad()
}
function  agregarFunconalidad() {
    productos.forEach(prod=>{
      document
      .querySelector(`#btn-agregar${prod.id}`)
      .addEventListener("click",()=> {
        console.log(prod);
        agregarAlcarrito(prod)
         });
    });
}

function agregarAlcarrito(prod) {
    let existe = carrito.some((productoSome) => productoSome.id === prod.id)
    if( existe === false){
        prod.cantidad= 1;
        carrito.push(prod);
    } else {
        //let prodFind = carrito.find((productoFind) => productoFind.id === prod.id);
        //prodFindprod.cantidad++;
        prod.cantindad++
    }
    //carrito.push(prod);
    console.log(carrito);
    renderzarCarrito()
    
}
function renderzarCarrito() {
    carritoDiv.innerHTML="";
    carrito.forEach(prod=>{
        carritoDiv.innerHTML += `<div class=redenrizarcarrito>
        <h4>${prod.nombre}</h4>
        <p>CANTIDAD:${prod.cantidad}</p>
        <button class="btnCarrito" id="btn-borrar${prod.id}">Borrar</button>
        </div>`;
 
    })
    localStorage.setItem("carrito", JSON.stringify(carrito))
    borrarProductos()
}
function borrarProductos() {
    carrito.forEach((prod) =>{
        document
        .querySelector(`#btn-borrar${prod.id}`)
        .addEventListener("click", () => {
          carrito = carrito.filter(
          (productoFilter) => productoFilter.id !== prod.id
             );
          
        });
        renderzarCarrito();
    });
            
     
}


crearCards();
    */
