let titulo = document.getElementById("titulo")
console.log(titulo.innerHTML)

let hamburguesa = 5
let pizza = 2
let panDeJamon = 10
let carrito = 0
let comida = ""

/*class Comida{                                
    constructor(nombre, precio){
    this.Nombre = nombre;
    this.Precio = precio
    }
}*/                                   /*                                          Menu de comida                                                               */
const comidas = [{id: 1, comida:"Hamburguesa", precio: "5$"},
                 {id: 2, comida:"Pizza", precio: "2$"},
                 {id: 3, comida:"Pan de jamón", precio: "3$"}]
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
for (const comida of comidas){
  guardarLocal(comida.id, JSON.stringify(comida))
}
guardarLocal("Menú de comida", JSON.stringify(comidas))
class Cliente{
    constructor(nombre, dirección){
    this.Dirección = dirección 
    this.Nombre = nombre      /*                                 Cliente                                                                            */
    }
}
let arrayCliente = []

let botonEnviar = document.getElementById("enviarDatos")
let formCliente = document.getElementById("formCliente")

formCliente = addEventListener("submit", (e) => {    //formulario para obtener informacion del cliente
    e.preventDefault()
    let nombreCliente = document.getElementById("nombre").value
    let direccionCliente = document.getElementById("direccion").value
    sessionStorage.setItem("Nombre del cliente:", nombreCliente)
    sessionStorage.setItem("Dirección del cliente:", direccionCliente)
    arrayCliente.push(new Cliente(nombreCliente, direccionCliente))
    console.log(arrayCliente)
})
//let nombre_Cliente = sessionStorage.getItem("Nombre del cliente:")
//let direccion_Cliente = sessionStorage.getItem("Dirección del cliente:")

/*seccion de comida*/
let botonHamburguesa = document.getElementById("boton_comprar_hamburguesa")
botonHamburguesa.addEventListener("click", () => { //alerta de pedido exitoso
    carrito = hamburguesa + carrito
    comida= comida + "1 hamburguesa + "
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<div class="alert alert-success alert-dismissible fade show position-absolute top-0 end-0 boton" role="alert">
    <div id="div">
      <p id="parrafo">Añadido al carrito exitosamente</p>
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
    document.body.appendChild(contenedor)
})

let botonPizza = document.getElementById("boton_comprar_pizza")
botonPizza.addEventListener("click",() => {  //alerta de pedido exitoso
    carrito = pizza + carrito
    comida= comida + "1 pizza + "
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<div class="alert alert-warning alert-dismissible fade show position-absolute top-0 end-0 boton" role="alert">
    <div id="div">
      <p id="parrafo">Añadido al carrito exitosamente</p>
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
    document.body.appendChild(contenedor)
})

let botonPan = document.getElementById("boton_comprar_pan")
botonPan.addEventListener("click", () => {  //alerta de pedido exitoso
    carrito = panDeJamon + carrito
    comida= comida + "1 pan de jamon + "
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<div class="alert alert-danger alert-dismissible fade show position-absolute top-0 end-0 boton" role="alert">
    <div id="div">
      <p id="parrafo">Añadido al carrito exitosamente</p>
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
    document.body.appendChild(contenedor)
})
/*sección de comida*/

$("#compra_final").on("click", () => {
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

$("body").prepend(`<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Pedido realizado con éxito!</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p>Usted ha realizado un pedido de: ${comida}</p>
      <p>El valor total a pagar por su pedido es: ${precioFinal}</p>
      <p>Disfrute de su comida!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-danger">Realizar pago</button>
    </div>
  </div>
</div>
</div>`)
})


