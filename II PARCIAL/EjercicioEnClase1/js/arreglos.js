/**********************************************************************************
                                    ARREGLOS
***********************************************************************************/

//FORMAS DE DECLARAR UN ARREGLO

const array = [1, 2, 3, 4, 5]; //forma1
const array1 = new Array(1, 2, 3, 4, 5);//forma2
const array2 = Array.of(1, 2, 3, 4 ,5);//forma3

let numeros = [1, 2, 3, 4, 5];
let colores = ["Rojo", "Azul", "Verde", "Amarillo", "Negro"];
let vacio = [];
let conjunto = [{nombre: "Ricardo", apellido: "Vargas"}, {color: "Rojo"}];
let videojuegos = [
    "Super Mario Bros",
    "The legend of Zelda",
    "Final Fantasy",
    "Donkey Kong"
]
console.log(videojuegos[3]);

let arreglosCosas = [
    true,
    123,
    "Hola",
    1 + 2,
    function(){},
    ()=>{},
    {a: 1},
    ["hola", "mundo"]
];

console.log({arreglosCosas});
console.log(arreglosCosas[3]);

//map, filter y el reduce

// Son metodos funcionales que se pueden usar para recorrer
// y ademas transformar los datos de un arreglo.

let arreglos = [1, 2, 3, 4, 5];
let cuadrados = arreglos.map(num => num * num);
console.log({cuadrados});

//filtrar
//Filtra los datos de un arreglo

let numerosPares = [1, 2, 3, 4, 5];
let pares = numerosPares.filter(num => num % 2 ==0);
console.log({pares});

//reduce
//reduce los datos de un arreglo

let numerosR = [1, 2, 3, 4, 13, 45];
let maximo = numerosR.reduce((acumulador, num) => (num > acumulador ? num : acumulador), numerosR[0]);
console.log({maximo});

//ventajas
//Son ideales para trabajar con transformaciones y manipulaciones complejas
//Permiten un estilo de programacion funcional mas limpio y facil de usar

//Agregar nuevos elementos

//push() agregar uno o mas elementos al final de un array

let agregar = [1, 2, 3];
agregar.push(4); //Agrega el numero 4 al final de un array
console.log({agregar});

let a = ['uno', 'dos', 'tres'];
a.push('cuatro');
console.log({a});

//unshift() agrega uno o mas elementos al inicio de un array
let add = [1, 2, 3];
add.unshift(0); //agrega el 0 al principio del array
console.log({add});

// splice() puede agregar o eliminar elementos de cualquier parte dentro del array

let z = [1, 2, 3];
z.splice(1, 0, 4); //Agregar el numero 4 en la posicion 1, sin eliminar los elementos dentro del mismo
console.log({z});

//modificar elementos dentro de un array

//Se puede modificar los elementos directamente 
//atravez de un subindice y modificarlo

let m = [1, 2, 3];
m[1] = 5;
console.log(m);

//si deseamos modificar el arreglo de forma inmutable, se puede
//utilizar el metodo map()
//para crear un nuevo arreglo con los valores modificados.

let modificar = [1, 2, 3];
let nuevoModificado = modificar.map(num => num === 2 ? 5 : num); //cambiar el valor 2 por el 5
console.log(nuevoModificado);

//Eliminar elementos dentro de un array

//pop() elimina el ultimo elemento de un array
let e = [1, 2, 3];
e.pop();
console.log({e});

//shift() elimina el primer elemento de un array
let num = [1, 2, 3];
num.shift();
console.log(num);

//splice() para poder eliminar elementos en cualquier posicion

let  s = [1, 2, 3];
s.splice(1, 1);
console.log(s);