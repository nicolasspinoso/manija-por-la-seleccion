const galeriaCart=[];
const cart= (productId) =>{
    const cartContainer= document.getElementById("cart-container");
    const mostrarEncarrito = () =>{
        let product = products.find(product => product.Id == productId);
        galeriaCart.push(product);
        localStorage.setItem("products", JSON.stringify(galeriaCart));
        let div = document.createElement("div");
        div.classList.add("productInCart");
        div.innerHTML = `<p>${product.name}</p>
                            <p>Precio: ${product.precio}</p>
                            <p id="cantidad${product.id}">Cantidad: ${product.cantidad}</p>
                             <button class="btn btn- danger btn-sm" id="delete${product.id}">x</button>
                        `

        cartContainer.appendChild(div)
        let botonBorrar = document.getElementById(`delete${product.id}`);
        botonBorrar. addEventListener("click", (e)=>{
          deleteProducto(e);
        })

    }
    mostrarEncarrito()

}
function deleteProducto(e) {
    let btnclicked = e.target;
    btnclicked.parentElement.remove()
    
}