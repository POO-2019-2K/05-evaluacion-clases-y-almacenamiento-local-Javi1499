export default class Productos {
    constructor(producto){
        this._numP = producto.numP;
        this._nombre = producto.nomP;
        this._cantidad = producto.cantidad;
        this._precio = producto.precio;
    }

    get numP() {
        return this._numP;
    }

    get nomP() {
        return this._nombre;
    }

    get cantidad() {
        return this._cantidad;
    }

    get precio() {
        return this._precio;
    }


}