class Comida {
  constructor(nombre, precio, stock, img) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
    this.cantidad = 1;
  }
}

class Cliente {
  constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
  }
}
