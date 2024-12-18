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