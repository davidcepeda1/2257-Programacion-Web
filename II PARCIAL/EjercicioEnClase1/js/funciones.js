/**********************************************************************************
                                    FUNCIONES
***********************************************************************************/

//Funciones declaradas
function mifunction(a, b){
    console.log("La suma es:" + (a + b));
}

mifunction(3,4);

//utilizar return para funciones

function returnValor(a, b){
    return a + b;
}
let resultado = returnValor(4, 3);
console.log(resultado);

//funciones de tipo expresion
//declaracion de una funcion de tipo expresion

let sumar = function (a, b) {return a + b};
resultado = sumar(1,2);
console.log(resultado);

//funciones de tipo self-invoking
//funciones que se llaman a si mismos
//funciones anonimas
//Nota: se pueden utilizar estas funciones cuando se carga un programas
//no es muy comun pero se puede utilizar en ciertos casos

(function (a,b){
    console.log('Ejecutando la funcion: ' + ( a + b ));
})(3,4);

function total(x, y, z){
    console.log(arguments.length);
    return x + y + z;
}

total(1, 2, 3);

//funciones tipo flecha en javascript (arrow function)

const multiplicar = (x, y) => x * y;
console.log(multiplicar(2,3));

//funcion anonima
//es una fincion sin nombre, comunmente usada como argumento para otras funciones

setTimeout(function(){
    console.log('funcion anonima')
},1000);

//operaciones dentro de funciones flecha

const operaciones = { sumar : (a, b) => a + b};

console.log(operaciones.sumar(1,2));
console.log(operaciones.restar?.(3,2));


//Crea una funcion declarada llamada calcularPromedio que reciba tres numeros como parametros y retorne su promedio

function calcularPromedio(calf1, calf2, calf3) {
    return (calf1 + calf2 + calf3) / 3;
}

const promedio = calcularPromedio(8, 9, 10);
console.log(promedio);


//Declara una funcion expresada llamada determinar Mayor que reciba dos numeros como parametros y retorne cual de ellos es mayor

const determinarMayor = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
};

const mayor = determinarMayor(15, 10);
console.log(mayor);

//Crea una funcion flecha llamada esPar que reciba un numero y retorne true si el numero es par y false si no lo es

const esPar = (num) => num % 2 === 0;

console.log(esPar(4)); 
console.log(esPar(7));

/*
Escribe una funcion anonima autoejecutable que:

LLame a las funciones anteriores (calcularPromedio, determinarMayor y esPar),
use valores de ejemplo y muestre los resultados en la consola

Reto: Agrega validaciones para asegurarte que los parametros son numeros antes de realizar operaciones

Si algun parametro no es un numero, lanza un error con un mensaje descriptivo
*/
const validarNumeros = (...valores) => {
    for (let valor of valores) {
        if (typeof valor !== 'number') {
            console.log(`El valor "${valor}" no es un número válido.`);
            return false;
        }
    }
    return true;
};

(function () {
    try {
        if (validarNumeros(8, 9, "10")) {
            const promedio = calcularPromedio(8, 9, "10");
            console.log(`El promedio es: ${promedio}`);
        }

        if (validarNumeros(8, 9, 10)) {
            const promedio = calcularPromedio(8, 9, 10);
            console.log(`El promedio es: ${promedio}`);
        }

        if (validarNumeros(15, 10)) {
            const mayor = determinarMayor(15, 10);
            console.log(`El número mayor es: ${mayor}`);
        }

        if (validarNumeros(4)) {
            console.log(`¿El número 4 es par? ${esPar(4)}`);
        }

        if (validarNumeros(7)) {
            console.log(`¿El número 7 es par? ${esPar(7)}`);
        }
    } catch (error) {
        consoleS.error(error.message);
    }
})();
