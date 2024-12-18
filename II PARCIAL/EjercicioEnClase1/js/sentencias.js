//Sentencias de control

//sentencia if

let numero = 10;

if(numero == 1){
    console.log("El numero es 1");
}else if (numero == 2){
    console.log("El numero es 2")
}else{
    console.log("El numero no es 1 ni 2")
}

//ejercicio estaciones del año

/*
let mes = 11;
let estacion;

if(mes == 1 || mes == 2){
    estacion = "Invierno";
}else if(mes == 3 || mes == 4){
    estacion = "Primavera";
}else if(mes == 5 || mes == 6){
    estacion = "Verano";
}else if(mes == 7 || mes == 8){
    estacion = "Otoño";
}else{
    estacion = "No es un mes del año";
}
console.log(estacion);
*/

//ejercicio del calculo de la hora del dia

/*
6am - 11 am = mañana Buenos dias
12pm - 19pm = tarde Buenas tardes
20pm - 23pm = noche Buenas noches
24pm - 5am = noche/dia durmiendo
*/

let horadia = 23;
let mensaje;

if(horadia >= 0 && horadia < 12){
    mensaje = "Buenos dias";
}else if(horadia >= 12 && horadia < 19){
    mensaje = "Buenas tardes";
}else if(horadia >= 19 && horadia < 24){
    mensaje = "Buenas noches";
}else if(horadia >= 0 && horadia < 6){
    mensaje = "Durmiendo";
}else{
    mensaje = "No es una hora del dia"
}
console.log(mensaje);

//sentencia switch

let mes = 5;
let estacion = "Estacion desconocida";

switch (mes){
    case 1:
    case 2:
        estacion = "Invierno";
        break;
    case 3:
    case 4:
        estacion = "Primavera";
        break;
    case 5:
    case 6:
        estacion = "Verano";
        break;
    case 7:
    case 8:
        estacion = "Otoño";
        break;
    default:
        estacion = "No es un mes del año";
        break;
    }
    console.log(estacion);