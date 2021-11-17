let hamburguesa = 5
let pizza = 2
let panDeJamon = 10
let carrito = 0
let comida = ""

function Cliente (nombre, dirección, pedido, precio){
    this.Dirección = dirección 
    this.Nombre = nombre
    this.Pedido = pedido
    this.Precio = precio
}

let nombreIngresado = prompt ("Ingrese su nombre")
console.log("El nombre del cliente es " + nombreIngresado)
let direccionIngresada = prompt ("Ingrese su dirección")
console.log("La dirección del cliente es " + direccionIngresada)

let pedido = prompt ("Elija su comida (Hamburguesa, Pizza o Pan de jamon)")
if (pedido == "Hamburguesa"){
    console.log(nombreIngresado + " ha pedido una hamburguesa")
    carrito = hamburguesa + carrito
    comida= comida + "1 hamburguesa + "
}
else if (pedido == "Pizza"){
    console.log(nombreIngresado + " ha pedido una pizza")
    carrito = pizza + carrito
    comida= comida + "1 pizza + "
}
else if (pedido == "Pan de jamon"){
    console.log(nombreIngresado + " ha pedido un pan de jamon")
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
        console.log(nombreIngresado + " ha pedido una hamburguesa")
        carrito = hamburguesa + carrito
        comida= comida + "1 Hamburguesa + "
    }
    else if (pedido == "Pizza"){
        console.log(nombreIngresado + " ha pedido una pizza")
        carrito = pizza + carrito
        comida= comida + "1 pizza + "
        }
    else if (pedido == "Pan de jamon"){
        console.log(nombreIngresado + " ha pedido un pan de jamon")
        carrito = panDeJamon + carrito
        comida= comida + "1 pan de jamon + "
    }
    else{
        alert("Usted no ha elegido ninguna de las opciones disponibles")
        console.log(nombreIngresado + " no ha elegido una opcion disponible")
    } 
    pedidoExtra = prompt("¿Desea elegir algo mas? ¿Si o No?")
}
let precio = carrito
console.log("el costo del pedido es " + precio)
function calcularIva(precio){
    return (precio * 0.16)
}
let iva = calcularIva(precio)
console.log ("el iva del pedido es " + iva)
function resultado(precio){
    return (precio + (precio * 0.16))
}
let precioFinal = resultado(precio)
console.log ("el precio final del pedido es " + precioFinal)

carrito = precioFinal
precioFinal = precioFinal + "$"

const cliente1 = new Cliente (nombreIngresado, direccionIngresada, comida, precioFinal)
console.log(cliente1)

alert("Su pedido final es de " + comida + " con un valor total de " + precioFinal + 
" pronto llegará su pedido a la dirección indicada, disfrute su comida!")

 



