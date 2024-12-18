var nombre;
var edad;
var altura;

nombre = "Juan";
edad = 20;
altura = 1.50;

console.log("EL nombre de la persona es: "+ nombre);
console.log("La edad de la persona es: "+ edad);
console.log("La altura de la persona es: " + altura);

//var para declarar una variable global
//let para declarar una variable local o tambien una variable de bloque
//const declara una variable constante es decir que su valor no va a cambiar

//if marca un bloque de instrucciones que se ejecutan si una condicieon se cumple
//switch marca un bloque de instrucciones que se ejecutan si una condicion se cumple
//for marca una condicion de instrucciones que se ejecutan varias veces
//while marca una condicion de instrucciones que se ejecutan varias veces

//function marca un bloque de instrucciones que se ejecutan cuando se llama
//try se ejecuta cuando no se produce un error
//catch se ejecuta cuando se produce un error
//return se ejecuta cuando una condicion se cumple, ademas de retornar un valor

/*Tipos de datos en javascript */

//tipos de datos string
var nombre = "Juan";
console.log(nombre);

//tipos de dato numerico
var edad = 20;
console.log(edad);

//tipo de dato object u objeto
var objeto = {
    nombre: 'Juan',
    edad: 20,
    altura: 1.50
}
console.log(objeto);

//tipo de dato typeof
var var1 = "Juan";
var var2 = false;
var var3 = BigInt(122);
var var4 = [1, 2, 3];

console.log(var1);
console.log(typeof var1);

console.log(var2);
console.log(typeof var2);

console.log(var3);
console.log(typeof var3);

console.log(var4);
console.log(typeof var4);

//tipo de dato boolean true, false
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//tipo de dato function
function saludar(){}
console.log(saludar);
console.log(typeof saludar);

//tipo de dato symbol
var simbolo = Symbol();
console.log(simbolo);
console.log(typeof simbolo);

//tipo clase es una funcion
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }   
}
console.log(Persona);
console.log(typeof Persona);

//tipo undefined
var variable;
console.log(variable);
console.log(typeof variable);

//var x;
//console.log(x);
//console.log(typeof x);

//tipo de dato null
var variable = null;
console.log(variable);
console.log(typeof variable);

//tipo de datos de tipo arreglo en javascript
var autos = ["BMW", "Mercedes Benz", "Volvo"];
console.log(autos);
console.log(typeof autos);

//tipo de dato de cadenas vacias
var variable = '';
console.log(variable);
console.log(typeof variable);

//reglas de nombre de variables de javascript
let nombreCompleto;
let nombrecompleto;

//formas correctas de declarar una variable
var a1nombreCompleto;
var _nombreCompleto;
var $nombreCompleto;

//formas incorrectas de declarar una variable
//var 1nombreCompleto;
//var #nombreCompleto;
//var %nombreCompleto;
//no esta permitido ingresar estos tipos de variables

//operadores en javascript
//operadores aritmeticos
//operadores de asignacion
//operadores de comparacion
//operadores logicos
//operadores de incremento y decremento

//operadores aritmeticos
//let x1 = 10;
//let y = 5;
//let z = x1 + y;
//console.log(z);

//let x2 = 10;
//let y2 = 5;
//let z2 = x2 * y2;
//console.log(z2);

//let x3 = 10;
//let y3 = 5;
//let z3 = x3 / y3;
//console.log(z3);

//pre-incremento
//let a = 7;
let x = 9;
//x = ++a
console.log(x);
//console.log(a);

//post incremento
//let b = 7;
let z = 9;
//x = b++
//console.log(b);
console.log(z);

//post decremento
//let c = 7;
//let e = 9;
//x = b--
console.log(c);
console.log(e);

//pre decremento
let i = 7;
//let g = 9;
//x = --b
console.log(f);
console.log(g);

//operadores de comparacion
//igual ==
//no igual !=
//mayor que >
//menor que <
//mayor o igual >=
//menor o igual <=

var l = 10;
var f = 5;
var c = l == f;
var d = l != f;
var e = l > f;
var f = l < f;
var g = l >= f;
var h = l <= f;

let comparacion = 10;
let comparacion2 = "10";

let comparacion3 = comparacion == comparacion2;
console.log(comparacion3);

let comparacion4 = comparacion === comparacion2;
console.log(comparacion4);

console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

//variables de procedencia de operadores

//1. ()
//2. **
//3. * /
//4. + -
//5. ++ --

let a11 = 6, b11 = 7, c11 = 8;
let dato1 = (a11 + b11) * c11;
console.log(dato1);

let a2 = 6, b2 = 7, c2 = 8, d2 = 9;
let dato2 = a2 * (b2 + c2);
console.log(dato2);

let dato3 = a2 * b2 + c2 / d2;
console.log(dato3);

//Operadores de asignacion
//Asignacion = =
//suma y asignacion +=
///resta y asignacion -=
//multiplicacion y asignacion *=
//division y asignacion /=

let a = 3;
let a10=3;

a+=3;
console.log(a);

a10-=3;
console.log(a10);

let numero = 10;
if(numero % 2 ==0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}

//determinar si una persona es mayor o no de edad

let persona1 = 18;
if(persona1 >=18){
    console.log("Es mayor de Edad");
}else{
    console.log("Es menor de Edad");
}

//operadores AND

let s = 10;

let valMin = 12, valMax = 0;
if(s >= valMin && s <= valMax){
    console.log("El valor esta dentro del rango");
}else{
    console.log("El valor esta fuera de rango");
}

//operadores OR

if(s >= valMin || s <= valMax){
    console.log("El valor esta dentro del rango");
}else{
    console.log("El valor esta fuera de rango");
}

//operadores ternarios
let resultado = (s >= valMin && s <= valMax) ? "El valor esta dentro del rango" : "El valor esta fuera del rango";

//conversion
let miNumero = "10";
console.log(typeof miNumero);

let edad1 = parseInt(miNumero);
let edad2 = Number(miNumero);

if(edad1 >= 18){
    console.log("Puede votar")
}else{
    console.log("No se puede votar")
}

//parseInt: convierte un valor en numero entero (sin decimales)
// number: convierte un valor en un numero (puede ser entero o flotante)

console.log(parseInt("42px")); // solo la parte numerica
console.log(parseInt(3.141516)); // solo la parte entera
console.log(parseInt("abc"))

console.log(Number("42px")); // solo la parte numerica
console.log(Number(3.141516)); // solo la parte entera
console.log(Number("abc"))

console.log(Number(true)); // solo la parte numerica
console.log(Number(false)); // solo la parte entera
console.log(Number(null));
console.log(Number(undefined))