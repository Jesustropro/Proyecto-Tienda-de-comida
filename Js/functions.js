const añadirAlCarrito = (comidaArray) => {
  carritoEnStorage = JSON.parse(localStorage.getItem("carrito"));

  let valor = carritoEnStorage.findIndex(
    (comida) => comida.nombre == comidaArray.nombre
  );

  if (valor != -1) {
    carritoEnStorage[valor].cantidad += 1;
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
};

const crearProductos = (productos) => {
  productos.forEach((comidaArray, indice) => {
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

  productos.forEach((comidaArray, indice) => {
    document
      .getElementById(`boton${indice}`)
      .addEventListener("click", () => añadirAlCarrito(comidaArray));
  });
};
