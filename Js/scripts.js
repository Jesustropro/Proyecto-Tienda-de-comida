/* let divComidas = document.getElementById("comidas")
fetch("./JSON/comidas.json")
.then(promesa => promesa.json())
.then(dataComidas => {
  dataComidas.forEach((comidaArray,indice) => {
    divComidas.innerHTML += `
    <div class="card text-white bg-danger mb-3" id="comida${indice}" style="max-width: 20rem; margin: 8px; padding-top: 10px;">
  <img src="./Multimedia/${comidaArray.img}" class="card-img-top" alt="">
  <div class="card-body">
    <h4 class="card-title">${comidaArray.nombre}</h4>            //AVANCE DEL PROYECTO FINAL
    <p class="card-text">Precio: $${comidaArray.precio}</p>
    <p class="card-text">Disponible:${comidaArray.stock}</p>
    <button id="boton${indice}" class="btn btn-dark"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVJJREFUSEu9lNFRwzAQRHcnBUAJEg0QOoAKSAeEX4iD6QAqwBMFfjEVAB1ABYQGIlMBoYDMMTGJR9iOZewE/d7p3u2tTsSWD7dcH/8HkEDLUs0MYEwzvdyEukyBA/ipK3LEcfLSFlIYkQQqBHgD4JnG9jYPCNUu5vxMC3dEM0qSNpBSk2WgYxAnjQsLJhzbg8X9ckCoupjzrTEA+KCxai0g9TjQEwD7ZRAamzZWeBirZPKao+mVB6D6AO8bARzvKhdNAj0DsJM1tuw8D80peaWxh9mdqjnLcC+CyMXfAHJKk8T1AKFSmNPmm6jw4AsdUYyShfL0eP8iCfQTgGMXshYgeODY9n/l+p6iDFQP5KMvL42XfC9eBb4n64DfaWy3MM5anbVIqqdgqG8hOANxx5E9d3lSEatlcn5jVwavIO4O5GP1AdtW0MIC/x60KV57RG0g31U/jxk7xX9qAAAAAElFTkSuQmCC"/></button>
  </div>
</div>`
  });
}) */



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
$("#enviarDatos").on("click", () => {
  $("#formCliente").fadeOut(1000)
})

//let nombre_Cliente = sessionStorage.getItem("Nombre del cliente:")
//let direccion_Cliente = sessionStorage.getItem("Dirección del cliente:")

/*seccion de comida*/

$("#animacion").hide()

let botonHamburguesa = document.getElementById("boton_comprar_hamburguesa")
botonHamburguesa.addEventListener("click", () => { //alerta de pedido exitoso
    carrito = hamburguesa + carrito
    comida= comida + "1 hamburguesa + "
    $("#animacion").slideToggle(1500)
                    .slideToggle(1500)
})

let botonPizza = document.getElementById("boton_comprar_pizza")
botonPizza.addEventListener("click",() => {  //alerta de pedido exitoso
    carrito = pizza + carrito
    comida= comida + "1 pizza + "
    $("#animacion").slideToggle(1500)
                    .slideToggle(1500)
})

let botonPan = document.getElementById("boton_comprar_pan")
botonPan.addEventListener("click", () => {  //alerta de pedido exitoso
    carrito = panDeJamon + carrito
    comida= comida + "1 pan de jamon + "
    $("#animacion").slideToggle(1500)
                    .slideToggle(1500)
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
      <button type="button" class="btn btn-warning" id="btn-cerrar" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-danger">Realizar pago</button>
    </div>
  </div>
</div>
</div>`)

$("#btn-cerrar").on("click", () => {
  $("#compra_final").fadeOut(500)
})
})