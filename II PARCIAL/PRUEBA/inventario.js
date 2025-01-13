//Clase Inventario
//Metodos: agregarProductos(), listarProductos(), filtrarPorCategoria() y aplicarDescuento()

class Inventario {
    constructor() {
        this.productos = [];
    }
    agregarProducto(nombre, precio, cantidad, categoria) {
        this.productos.push({ nombre, precio, cantidad, categoria });
    }
    listarProductos(orden = 'ascendente') {
        return this.productos.sort((a, b) => {
            return orden === 'ascendente' ? a.precio - b.precio : b.precio - a.precio;
        });
    }
    filtrarPorCategoria(categoria) {
        return this.productos.filter(producto => producto.categoria === categoria);
    }
    /*get inventario(){
        return this.precio.aplicarDescuento();
    }
    set inventario(Inventario){
        this.precio = Inventario.aplicarDescuento();
    }*/
    aplicarDescuento(categoria, porcentaje) {
        this.productos.forEach(producto => {
            if (porcentaje < 0) {
                console.log('Error: El porcentaje de descuento no puede ser negativo.');
                return;
            }
            if (producto.categoria === categoria) {
                producto.precio -= producto.precio * (porcentaje / 100);
            }
            console.log(`Se aplico un descuento del ${porcentaje} % en la categoria ${categoria}`);
        });
    }
}

// Clase Venta
//Metodos: realizarVenta() y generarReporte
class Venta {
    constructor(inventario) {
        this.inventario = inventario;
        this.ventas = [];
    }
    realizarVenta(nombreProducto, cantidad) {
        const producto = this.inventario.productos.find(p => p.nombre === nombreProducto);

        if (!producto) {
            console.log(`Error: El nombre del producto: ${nombreProducto} no encontrado.`);
            return;
        }

        if (producto.cantidad < cantidad) {
            console.log(`Error: Cantidad insuficiente de ${nombreProducto}`);
            return;
        }
        producto.cantidad -= cantidad;
        const fecha = new Date();
        this.ventas.push({ nombreProducto, cantidad, fecha });
        console.log(`Venta realizada: ${nombreProducto} - Cantidad: ${cantidad}`);
    }

    generarReporte() {
        const totalIngresos = this.ventas.reduce((total, venta) => {
            const producto = this.inventario.productos.find(p => p.nombre === venta.nombreProducto);
            return total + producto.precio * venta.cantidad;
        },0);

        const productoMasVendido = this.ventas.reduce((masVendido, venta) => {
            masVendido[venta.nombreProducto] = (masVendido[venta.nombreProducto] || 0) + venta.cantidad;
            return masVendido;
        });

        const masVendido = Object.keys(productoMasVendido).reduce((a, b) => {
            return productoMasVendido[a] > productoMasVendido[b] ? a : b;
        },);

        console.log('Reporte de Ventas');
        console.log('Inventario Actualizado:', this.inventario.productos);
        console.log('Ventas Realizadas:', this.ventas);
        console.log('Total Ingresos:', totalIngresos);
        console.log('Producto Más Vendido:', masVendido);
    }
}

//Declaramos un inventario y usamos los metodos de la clase inventario para agregar productos con sus atributos correspondientes

const inventario = new Inventario();
inventario.agregarProducto('Pantalones', 27, 100, 'Ropa');
inventario.agregarProducto('Camisetas', 15, 50, 'Ropa');
inventario.agregarProducto('Zapatillas', 19, 30, 'Calzado');
inventario.agregarProducto('Jerseys', 25, 100, 'Deportivo');

const venta = new Venta(inventario);
venta.realizarVenta('Pantalones', 1);
venta.realizarVenta('Zapatillas', 1);
venta.generarReporte();
