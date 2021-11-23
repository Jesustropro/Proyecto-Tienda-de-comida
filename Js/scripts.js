let hamburguesa = 5
let pizza = 2
let panDeJamon = 10
let carrito = 0
let comida = ""

class Comida{                                
    constructor(nombre, precio){
    this.Nombre = nombre;
    this.Precio = precio
    }
}                                   /*                                          Menu de comida                                                               */
let arrayMenu = []
arrayMenu.push(new Comida("Hamburguesa", "5$"))
arrayMenu.push(new Comida("Pizza", "2$")) 
arrayMenu.push(new Comida("Pan de jamon", "10$"))
console.log(arrayMenu)

class Cliente{
    constructor(nombre, dirección){
    this.Dirección = dirección 
    this.Nombre = nombre      /*                                 Cliente                                                                            */
    }
}
let arrayClientes = []

class Pedido{         
    constructor(comidas, cliente, costo){
    this.Comidas = comidas 
    this.Cliente = cliente                /*                              Pedido                                                   */
    this.Costo = costo
    }
}
let arrayPedidos = []


let nombreIngresado = prompt ("Ingrese su nombre")          /*Nombre del cliente */

let direccionIngresada = prompt ("Ingrese su dirección")  /*Dirección del cliente */


let pedido = prompt ("Elija su comida (Hamburguesa, Pizza o Pan de jamon)")
if (pedido == "Hamburguesa"){
    carrito = hamburguesa + carrito
    comida= comida + "1 hamburguesa + "
}
else if (pedido == "Pizza"){
    carrito = pizza + carrito
    comida= comida + "1 pizza + "
}                                                           /*Pedido del cliente */
else if (pedido == "Pan de jamon"){
    carrito = panDeJamon + carrito
    comida= comida + "1 pan de jamon + "
}
else{
    alert("Usted no ha elegido ninguna de las opciones disponibles")
    console.log(nombreIngresado + " no ha elegido una opcion disponible")
}

let pedidoExtra = prompt("¿Desea elegir algo mas? ¿Si o No?")
while (pedidoExtra == "Si"){
    let pedido = prompt ("Elija su comida (Hamburguesa, Pizza o Pan de jamon")
    if (pedido == "Hamburguesa"){
        carrito = hamburguesa + carrito
        comida= comida + "1 Hamburguesa + "
    }
    else if (pedido == "Pizza"){     /*Pedidos extras del cliente */
        carrito = pizza + carrito
        comida= comida + "1 pizza + "
        }
    else if (pedido == "Pan de jamon"){
        carrito = panDeJamon + carrito
        comida= comida + "1 pan de jamon + "
    }
    else{
        alert("Usted no ha elegido ninguna de las opciones disponibles")
        console.log(nombreIngresado + " no ha elegido una opcion disponible")
    } 
    pedidoExtra = prompt("¿Desea elegir algo mas? ¿Si o No?")
}

let precio = carrito         /*Suma del precio de todas las comidas pedidas */

function calcularIva(precio){
    return (precio * 0.16)
}                              /*Cálculo del iva del pedido */
let iva = calcularIva(precio)

function resultado(precio){
    return (precio + (precio * 0.16))
}                                     /*Precio final del pedido con iva incluido */
let precioFinal = resultado(precio)

carrito = precioFinal          
precioFinal = precioFinal + "$" /* Precio final del pedido que se le muestra al cliente */

arrayClientes.push(new Cliente(nombreIngresado, direccionIngresada))
console.log(arrayClientes)         /*Datos personales del cliente */

arrayPedidos.push(new Pedido(comida, arrayClientes, precioFinal))
console.log(arrayPedidos)     /*Datos del pedido del cliente */

alert("Su pedido final es de " + comida + " con un valor total de " + precioFinal + 
" pronto llegará su pedido a la dirección indicada, disfrute su comida!")

 



