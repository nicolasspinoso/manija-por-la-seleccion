


//modal
const modalContainer = document.getElementById("modal_container");
const openCart = document.getElementById("open");
const closeCart = document.getElementById("close");
const modalCart = document.getElementById("modalCart");
console.log(modalContainer, openCart, closeCart, modalCart)


openCart.addEventListener("click", ()=>{
    modalContainer.classList.toggle("modal-active");
});

closeCart.addEventListener("click", () =>{
    modalContainer.classList.remove("modal-active");
});
modalContainer.addEventListener("click", () =>{
    closeCart.click()
});
modalCart.addEventListener("click", (e) =>{
  e.stopPropagation();
})


//inventario de producto

class productos{
    constructor(id, name, precio, img, cantidad){
        this.id= id;
        this.name= name;
        this.precio= precio;
        this.img= img;
        this.cantidad= cantidad;
    }

}


const products = []
const prod1=    new productos("1","Camiseta titular ", 10500,"/imagenes/camisetatitular.jfif", 2);
const prod2=    new productos("2", "Camiseta suplente ", 8500,"./imagenes/camisetasuplente.jfif", 3);
const prod3=    new productos("3", "Short titular", 5500, "./imagenes/shorttitular.png" , 2);
const prod4=    new productos("4", "Medias", 3500,  "./imagenes/medias.png",3);
const prod5=    new productos("5", "Pechera de entrenamiento", 4500, "./imagenes/Pechera de entrenamiento.jpg",1);
const prod6=    new productos("6","Calsa termica", 6600,"./imagenes/Calsa termica.png ", 2);
const prod7=    new productos("7","Buzo vamos argentina", 6900,"./imagenes/buzovamosargentina.jpg", 2);
const prod8=    new productos("8","Piluso de la seleccion", 1500,"./imagenes/piluso.png" , 2);



products.push( prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8);
console.log(products)

//crear una funcion para traer los productos

const mostrarProductos =(products) =>{
    const productsContainer = document.getElementById("product-container");
    products.forEach(product=>{
        const card= document.createElement("card");
        card.innerHTML = `<div class="card" style="width: 18rem;" >
                            <img src="${product.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">Precio:$ ${product.precio}</p>
                                <p id="cantidad" class="card-text">${product.cantidad}</p>
                                <button class="btn btn-primary" id="button${product.id}">comprar</button>
                                </div>
                            </div>`
    productsContainer.appendChild(card);
    const button= document.getElementById(`button${product.id}`);
    button.addEventListener("click", ()=>{
        cart(product.id);
        alert(`agregaste ${product.name}`)
        toastSwal("agregaste ${product.name}", "warning")
        
         })
    });
}
mostrarProductos(products)
const toastSwal= (mensaje, icono)=>
Swal.fire({
    text: mensaje,
    icon: icono,
    confirmButtonText: 'false',
    timer: 5000
  })

