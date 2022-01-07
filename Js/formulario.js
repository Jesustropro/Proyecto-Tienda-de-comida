function verImagen(){
  n=0;
  this[n++]="./Multimedia/0.png";  
  this[n++]="./Multimedia/1.png";
  this[n++]="./Multimedia/2.png"
  this.N=n;                                //funcion para mostrar imagenes al azar
}
var imagen =new verImagen();
src = imagen[ Math.floor(Math.random() * imagen.N) ] ; 

formCliente = addEventListener("submit", (e) => {    //formulario para obtener informacion del cliente
    e.preventDefault()
    let nombreCliente = document.getElementById("nombre").value
    let direccionCliente = document.getElementById("direccion").value
    sessionStorage.setItem("Nombre del cliente:", nombreCliente)
    sessionStorage.setItem("Dirección del cliente:", direccionCliente)
    arrayCliente.push(new Cliente(nombreCliente, direccionCliente))
    nombreClienteStorage = sessionStorage.getItem("Nombre del cliente:")
    direccionClienteStorage = sessionStorage.getItem("Dirección del cliente:") 
    usuarioModal.innerHTML = (`   
    <div class="card mb-0 border-danger" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-6">
      <img src="${src}" class="card-img-top rounded-start" alt="...">
      </div>                                                                   
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">Usuario</h5>
          <p class="card-text">Nombre: ${nombreClienteStorage}</p>
          <p class="card-text">Dirección de envío: ${direccionClienteStorage}</p>
        </div>
      </div>
    </div>
    </div>`)
    $("#enviarDatos").fadeOut()
    $("#formCliente").fadeOut()
  })







