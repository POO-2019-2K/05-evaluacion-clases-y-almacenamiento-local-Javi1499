import Productos from "./Productos.js"
export default class Tabla {
    constructor(tableTabla) {
        this._tableTabla = tableTabla;
        this._productos = [];
        this._initTables();
    }

    _initTables() {
        let lsProductos = JSON.parse(localStorage.getItem("productos"));
        if (lsProductos === null) {
            return;
        }
        lsProductos.forEach((e, index) => {
            e.birthday = new Date(e.birthday);
            this._showInTable(new Productos(e));
        });
    }

    _showInTable(producto) {
        let row = this._tableTabla.insertRow(-1);

        let cellNumP = row.insertCell(0);
        let cellNomP = row.insertCell(1);
        let cellCantidad = row.insertCell(2);
        let cellPrecio = row.insertCell(3);

        cellNumP.innerHTML = producto.numP;
        cellNomP.innerHTML = producto.nomP;
        cellCantidad.innerHTML = producto.cantidad;
        cellPrecio.innerHTML = producto.precio;

        let objProducto = {
            numP : producto.numP,
            nomP : producto.nomP,
            cantidad : producto.cantidad,
            precio : producto.precio
         }
        this._productos.push(objProducto);
    }
    addProducto(producto) {
        this._showInTable(producto);
        localStorage.setItem("productos", JSON.stringify(this._productos));

    localStorage.setItem("productos", JSON.stringify(this._productos));
    }
}