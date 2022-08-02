

function ingresarNombre() 
{alert("Bienvenido a Manija por la Seleccion Argentina");
let nombre = prompt("Ingrese su nombre");
while (nombre === "" || nombre === null) {
    nombre = prompt("Ingrese su nombre");
    }
}
 function mostrarProductos() 
 {let producto;
    do {producto = prompt(" ¿En que articulo esta interesado? \n1)camiseta tutilar  \n2)camiseta suplente \n3)camiseta  de entrenamiento");
    } 
    while (producto != 1 && producto != 2 && producto != 3);
    switch (producto) {
        case "1":return "camiseta tutilar";
        case "2":return "camiseta suplente ";
        case "3":return "camiseta  de entrenamiento";
    }
}



function validarPrecio(producto)  
{if (producto === "camiseta tutilar")
 {return 10000;
    } else if (producto === "camiseta suplente") 
        {return 9000;
        
        } else {return 8500;
        }
    }
function cobrar(producto, precio) {
    alert("Usted lleva el siguiente producto :" +
    producto.toUpperCase() +
    "\nPrecio $" +
    precio);

    let abonar = prompt("Con cuanto paga ? ");
    if (abonar > precio) 
    {alert("Su vuelto es $" + (abonar - precio));
    } else {
    alert("no es suficiente");
    }
}
    ingresarNombre();
    let productoSeleccionado = mostrarProductos();
    let precioProd = validarPrecio(productoSeleccionado);cobrar(productoSeleccionado, precioProd);
