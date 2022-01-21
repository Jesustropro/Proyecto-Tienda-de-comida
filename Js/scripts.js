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

// Busco los productos -> los genero -> añado eventListener para funcionalidad de añadir productos
fetch("./JSON/comidas.json")
  .then((promesa) => promesa.json())
  .then((dataComidas) => {
    crearProductos(dataComidas);
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
