
class Producto {
    constructor(id, nombre, importe){
    this.id= id
    this.nombre= nombre.toUpperCase()
    this.importe= importe

    }
    precioFinal(){
        return parseFloat((this.importe*iva).toFixed(2))
    }


}
const productos=[]
function listadoProductos() {
 
        productos.push(new Producto(12, "Camiseta titular", 10500))
        productos.push(new Producto(23, "Camiseta suplente ", 8500))
        productos.push(new Producto(34, "Camiseta  de entrenamiento", 6500))
        productos.push(new Producto(45, "Short titular", 5500))
        productos.push(new Producto(56, "Medias", 3500))
        productos.push(new Producto(67, "Pechera de entrenamiento", 4500))
        productos.push(new Producto(78,"Calsa termica", 6600))
    

}
listadoProductos()
function recorrerProductos() {
    debugger
    
    productos.forEach(Element=> {
        console.table(Element)
    })
    
}
console.log(productos)
alert("Bienvenido a Manija por la Seleccion Argentina")
let compra= prompt("¿Que producto desea? contamos con: \nCamiseta titular\n Camiseta suplente\n Camiseta  de entrenamiento\n Short titular\n Medias\n Pechera de entrenamiento \n Calsa termica").toUpperCase()
let buscar= productos.filter(el => el.nombre.includes(compra))
console.log(buscar)
alert("Gracias por su compra, a continuacion le diremos el precio del producto")

alert(`el precio a pagar es de :${buscar[0].importe}`)

function agregarProducto() {
    let nuevoProducto= prompt("agregar algun producto de interes:")
    let resultado= productos.includes(nuevoProducto)
    if (!resultado) {
        productos.push(nuevoProducto)
        
    } else {
        console.warn("el producto", nuevoProducto," ya figura en la lista")
        }
    }
