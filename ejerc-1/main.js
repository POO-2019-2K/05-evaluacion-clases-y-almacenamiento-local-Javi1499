import Productos from "./Productos.js"
import Tabla from "./Tabla.js"
class Main {
    constructor() {
        let tabla = new Tabla(document.querySelector("#tabla"), document.querySelector("#info"));

        document.querySelector("#btnEntrada").addEventListener("click", () => {

            let numP = document.querySelector("#numP").value;
            let nomP = document.querySelector("#nombreP").value;
            let cantidad = document.querySelector("#cantidadP").value;
            let precio = document.querySelector("#precio").value;

            let objProducto = {
               numP : numP,
               nomP : nomP,
               cantidad : cantidad,
               precio : precio
            }

            let producto = new Productos(objProducto);

            tabla.addProducto(producto);

            
        })
    }
}
let m = new Main();