//Sistema de Ventas en JS

//Creacion de la clase producto

class Producto{
    static contadorProductos = 0;
    //Modificador Static
    //Se utiliza para acceder directamente a traves de la clase

    //Los metodos o propiedades no requieren que se creen una 
    // instancia de la clase para ser utilizado
    //Se acceden directamente a traves de la clase
    constructor(nombre, precio, categoria, stock){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        if (precio > 0) {
        this._precio = precio;
    } else {
        console.log(`Advertencia: El precio ingresado para el producto "${nombre}" era negativo. Se ha ajustado a 0.`);
        this._precio = 0;
    }
        this._categoria = categoria;
        this._stock = stock;
    }

    getProducto(){
        return this._idProducto;
    }
    getNombre(){
        return this._nombre;
    }
    setNombre(){
        this._nombre = nombre;
    }
    getPrecio(){
        return this._precio
    }
    setPrecio(precio){
        if (precio > 0) {
            this._precio = precio;
        } else {
            console.log(`El precio no puede ser negativo`)
        }
    }
    getCategoria(){
        return this._categoria;
    }
    getStock(){
        return this._stock;
    }
    disminuirStock(cantidad){
        if (this._stock >= cantidad) {
            this._stock -= cantidad;
        } else {
            console.log(`Stock insuficiente`)
        }
    }
    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}, categoria: ${this._categoria}, stock: ${this._stock}`;
    }
}

class Orden{
    static contadorOrdenes = 0;
    
    static get MAX_PRODUCT(){     //cuando se trabaja con constantes se recomienda crear en mayusculas
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProductos(producto, cantidad = 1){
        //Verificar si no hemos superado el maximo de productos existentes
        if (this._productos.length < Orden.MAX_PRODUCT) {
            if (producto.getStock() >= cantidad) {
                producto.disminuirStock(cantidad);
                this._productos.push({producto,cantidad});
                console.log(`Producto agregado exitosamente: ${producto.toString()}`);
            } else {
                console.log(`No hay suficiente stock para el producto: ${producto.getNombre()}`);
            }
           //this._productos.push(producto);
            //Otra sintaxis
            //this._productos[this._contadorProductosAgregados++] = producto
            //console.log(`Producto agregado exitosamente: ${producto.toString()}`);
        } else {
            console.log(`No se puede agregar mas productos a la Orden`);
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for (const {producto, cantidad} of this._productos){
            let precio = producto.getCategoria() === "electronica" ? producto.getPrecio() * 0.9 : producto.getPrecio();
            totalVenta += precio * cantidad;
        }
        return totalVenta;
    }

    calcularImpuestos(impuesto = 0.15){
        return this.calcularTotal() * impuesto
    }    

    mostrarVenta() {
        let productosOrden = "";
        for (const {producto, cantidad} of this._productos) {
            let precioFinal = producto.getCategoria() === 'electronica' ? producto.getPrecio() * 0.9 : producto.getPrecio();
            let descuento = producto.getCategoria() === 'electronica' ? " (10% descuento aplicado)" : "";
            productosOrden += `\n ${producto.getNombre()}, Precio Unitario: ${precioFinal.toFixed(2)}${descuento}, Cantidad: ${cantidad}\n`;
        }
        console.log(`Orden: ${this._idOrden}, Total: ${this.calcularTotal().toFixed(2)}, Impuestos: ${this.calcularImpuestos().toFixed(2)}, Productos: ${productosOrden}`);
    }    
}

function listarProductosPorPreciosDesc(productos) {
    return productos.sort((a, b) => {
        const precioA = a.getCategoria() === "electronica" ? a.getPrecio() * 0.9 : a.getPrecio();
        const precioB = b.getCategoria() === "electronica" ? b.getPrecio() * 0.9 : b.getPrecio();
        return precioB- precioA;
    });
}

let producto1 = new Producto("Pantalón", 200, "ropa", 10);
let producto2 = new Producto("Vestido", 300, "ropa", 5);
let producto3 = new Producto("Jersey", 120, "ropa", 8);
let producto4 = new Producto("Smartphone", 1000, "electronica", 3);
let producto5 = new Producto("Laptop", 1500, "electronica", 2);


let orden1 = new Orden();
orden1.agregarProductos(producto1, 2);
orden1.agregarProductos(producto4, 1);
orden1.mostrarVenta();

let orden2 = new Orden();
orden2.agregarProductos(producto5, 1);
orden2.agregarProductos(producto3, 3);
orden2.mostrarVenta();


console.log("Productos ordenados por precio actualizado descendente:");
const productos = [producto1, producto2, producto3, producto4, producto5];
const productosOrdenados = listarProductosPorPreciosDesc(productos);
for (let producto of productosOrdenados) {
    const precioConDescuento = producto.getCategoria() === "electronica" ? producto.getPrecio() * 0.9 : producto.getPrecio();
    const impuestos = precioConDescuento * 0.15;
    console.log(`idProducto: ${producto.getProducto()}, nombre: ${producto.getNombre()}, precio: ${precioConDescuento.toFixed(2)}, impuestos: ${impuestos.toFixed(2)}, categoria: ${producto.getCategoria()}, stock: ${producto.getStock()}`);
}




//Stock disminuya

//Descuento por categoria:

//Crear una propiedad categoria en la clase producto
//los productos de la categoria electronica de tener un descuento del 10% a calcular del total de la venta

//Implementar un metodo calcularImpuestos()

//Listar Productos por precio descendente:

//Asegurarse que los precios no puedan ser negativos al establecer en la clase Producto







































/*
class Calculadora{
    //metodo estatico
    static sumar(a,b){
        return a+b;
    }
}

//Acceso al metodo estatico directamente desde la clase
console.log(Calculadora.sumar(2,3));

//No se puede acceder desde una instancia
const calc = new Calculadora();
console.log(Calculadora.sumar()); //undefined

class Contador{
    static totalInstancias = 0;
    constructor(){
        Contador.totalInstancias++; 
    }
    
    static mostrarInstancias(){
        return `Se ha creado ${Contador.totalInstancias} instancias`;
}
}

const c1 = new Contador();
const c2 = new Contador();

console.log(Contador.mostrarInstancias());

*/