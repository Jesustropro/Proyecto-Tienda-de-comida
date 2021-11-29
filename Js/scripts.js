let titulo = document.getElementById("titulo")
console.log(titulo.innerHTML)

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


//let nombreIngresado = prompt ("Ingrese su nombre")          /*Nombre del cliente */

//let direccionIngresada = prompt ("Ingrese su dirección")  /*Dirección del cliente */

let botonHamburguesa = document.getElementById("boton_comprar_hamburguesa")

botonHamburguesa.addEventListener("click", () => {
    carrito = hamburguesa + carrito
    comida= comida + "1 hamburguesa + "
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<div class="alert alert-success d-flex align-items-center position-relative position-absolute top-0 end-0 boton" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    <div id="div">
      <p id="parrafo">Añadido al carrito exitosamente</p>
    </div>`
    document.body.appendChild(contenedor)
})

let botonPizza = document.getElementById("boton_comprar_pizza")

botonPizza.addEventListener("click",() => {
    carrito = pizza + carrito
    comida= comida + "1 pizza + "
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<div class="alert alert-warning d-flex align-items-center position-relative position-absolute top-0 end-0 boton" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    <div id="div">
      <p id="parrafo">Añadido al carrito exitosamente</p>
    </div>`
    document.body.appendChild(contenedor)
})

let botonPan = document.getElementById("boton_comprar_pan")

botonPan.addEventListener("click", () => {
    carrito = panDeJamon + carrito
    comida= comida + "1 pan de jamon + "
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<div class="alert alert-danger d-flex align-items-center position-relative position-absolute top-0 end-0 boton" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    <div id="div">
      <p id="parrafo">Añadido al carrito exitosamente</p>
    </div>`
    document.body.appendChild(contenedor)
})

let botonFinalizarCompra = document.getElementById("compra_final")

botonFinalizarCompra.addEventListener("click",() => {
let precio = carrito         /*Suma del precio de todas las comidas pedidas */
let iva = 0

function calcularIva(precio){
    return (precio * 0.16)
}                              /*Cálculo del iva del pedido */
iva = calcularIva(precio)

function resultado(precio){
    return (precio + (precio * 0.16))
}                                     /*Precio final del pedido con iva incluido */
let precioFinal = resultado(precio)

carrito = precioFinal          
precioFinal = precioFinal + "$" /* Precio final del pedido que se le muestra al cliente */

let contenedorPedidoFinal = document.createElement("div")
contenedorPedidoFinal.innerHTML = `<h3>Su pedido es:</h3>
                       <h4>${comida}</h4>
                       <h3>El costo final de su pedido es:s
                       <h4>${precioFinal}`
document.body.appendChild(contenedorPedidoFinal)
})

//arrayClientes.push(new Cliente(nombreIngresado, direccionIngresada))
//console.log(arrayClientes)         /*Datos personales del cliente */
