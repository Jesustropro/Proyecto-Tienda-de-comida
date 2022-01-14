// Variables y definiciones
let arrayCliente = [];
let divComidas = document.getElementById("comidas");
let botonCarrito = document.getElementById("botonCarrito");
let carritoModal = document.getElementById("carritoModal");
let btnPago = document.getElementById("btnPago");
let botonEnviar = document.getElementById("enviarDatos");
let formCliente = document.getElementById("formCliente");
$("#alertOpExitosa").hide();
let carritoEnStorage = localStorage.getItem("carrito")
  ? JSON.parse(localStorage.getItem("carrito"))
  : localStorage.setItem("carrito", JSON.stringify([]));
const valorTotal = (cantidad, precio) => Number(precio) * Number(cantidad);

fetch("./JSON/comidas.json")
  .then((promesa) => promesa.json())
  .then((dataComidas) => {
    // Crear productos en el DOM
    dataComidas.forEach((comidaArray, indice) => {
      divComidas.innerHTML += `
            <div class="card text-white bg-danger col-12" id="comida${indice}" style="max-width: 19rem; margin: 4px; padding-top: 10px;">
          <img src="./Multimedia/${comidaArray.img}" class="card-img-top" alt="">
          <div class="card-body">
            <h4 class="card-title">${comidaArray.nombre}</h4>        
            <p class="card-text">Precio: $${comidaArray.precio}</p>
            <p class="card-text">Disponible:${comidaArray.stock}</p>
            <button id="boton${indice}" añadirproducto="a" class="btn btn-dark btn-añadir-carrito"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVJJREFUSEu9lNFRwzAQRHcnBUAJEg0QOoAKSAeEX4iD6QAqwBMFfjEVAB1ABYQGIlMBoYDMMTGJR9iOZewE/d7p3u2tTsSWD7dcH/8HkEDLUs0MYEwzvdyEukyBA/ipK3LEcfLSFlIYkQQqBHgD4JnG9jYPCNUu5vxMC3dEM0qSNpBSk2WgYxAnjQsLJhzbg8X9ckCoupjzrTEA+KCxai0g9TjQEwD7ZRAamzZWeBirZPKao+mVB6D6AO8bARzvKhdNAj0DsJM1tuw8D80peaWxh9mdqjnLcC+CyMXfAHJKk8T1AKFSmNPmm6jw4AsdUYyShfL0eP8iCfQTgGMXshYgeODY9n/l+p6iDFQP5KMvL42XfC9eBb4n64DfaWy3MM5anbVIqqdgqG8hOANxx5E9d3lSEatlcn5jVwavIO4O5GP1AdtW0MIC/x60KV57RG0g31U/jxk7xX9qAAAAAElFTkSuQmCC"/></button>
          </div>
        </div>
        `;
    });

    // Añadir al carrito
    dataComidas.forEach((comidaArray, indice) => {
      document
        .getElementById(`boton${indice}`)
        .addEventListener("click", () => {
          carritoEnStorage = JSON.parse(localStorage.getItem("carrito"));

          if (
            carritoEnStorage.find(
              (comida) => comida.nombre == comidaArray.nombre
            )
          ) {
            let index = carritoEnStorage.findIndex(
              (comida) => comida.nombre == comidaArray.nombre
            );
            carritoEnStorage[index].cantidad += 1;
            localStorage.setItem("carrito", JSON.stringify(carritoEnStorage));
          } else {
            let comida = new Comida(
              comidaArray.nombre,
              comidaArray.precio,
              comidaArray.stock,
              comidaArray.img
            );
            carritoEnStorage.push(comida);
            localStorage.setItem("carrito", JSON.stringify(carritoEnStorage));
          }
          $("#alertOpExitosa").slideToggle(450).fadeOut(800);
        });
    });
  });

botonCarrito.addEventListener("click", () => {
  carritoModal.innerHTML = `
  <p></p>`;
  let comidaStorage = JSON.parse(localStorage.getItem("carrito"));
  let totalCarrito = 0;
  comidaStorage.forEach((comidaCarrito, indice) => {
    const { cantidad, precio } = comidaCarrito;

    carritoModal.innerHTML += `
    <div class="card mb-2 border-danger" id="comidaCarrito${indice}" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-6">
        <img src="./Multimedia/${comidaCarrito.img}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">${comidaCarrito.nombre}</h5>
          <p class="card-text">Cantidad: ${comidaCarrito.cantidad}</p>
          <p class="card-text">Precio: $${comidaCarrito.precio}</p>
        </div>
      </div>
    </div>
  </div>
  `;

    totalCarrito += valorTotal(cantidad, precio);
  });
  costoTotal.innerHTML = `${totalCarrito}$`;
});

btnPago.addEventListener("click", () => {
  //animacion del alert de pedido exitoso
  Swal.fire(
    "Excelente!",
    "Se ha realizado el pago de manera exitosa!",
    "success"
  );
  localStorage.setItem("carrito", JSON.stringify([]));
  costoTotal.innerHTML = `0$`;
});
