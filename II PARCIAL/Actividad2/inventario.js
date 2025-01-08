let inventario = {
    producto1: {nombre: 'Camiseta', precio: 10, cantidad: 25},
    producto2: {nombre: 'Pantalon', precio: 25, cantidad: 45},
    producto3: {nombre: 'Zapatos', precio: 27, cantidad: 30},
    producto4: {nombre: 'Gorras', precio: 10, cantidad: 15}
};

Object.seal(inventario);

function venderProducto(nombreProducto, cantidad) {
    for (let clave in inventario) {
        let producto = inventario[clave];
        if (producto.nombre === nombreProducto) {
            if (producto.cantidad >= cantidad) {
                producto.cantidad -= cantidad; 
                console.log(`Venta exitosa: ${cantidad} unidades de ${nombreProducto}.`);
            } else {
                console.log(`Error: Stock insuficiente para ${nombreProducto}.`);
            }
            return;
        }
    }
    console.log(`Error: El producto ${nombreProducto} no existe en el inventario.`);
}

function aplicarDescuento(porcentaje) {
    if (porcentaje < 0) {
        console.log('Error: El porcentaje de descuento no puede ser negativo.');
        return;
    }
    for (let clave in inventario) {
        let producto = inventario[clave];
        let descuento = producto.precio * (porcentaje / 100);
        producto.precio -= descuento;
    }
    console.log(`Se aplico un descuento del ${porcentaje}% a todos los productos.`);
}


console.log('Inventario Inicial');
console.log(inventario);

venderProducto('Camiseta', 10);
venderProducto('Zapatos', 31);
venderProducto('Buso', 5);

aplicarDescuento(10);

console.log('Inventario final: ');
console.log(inventario);