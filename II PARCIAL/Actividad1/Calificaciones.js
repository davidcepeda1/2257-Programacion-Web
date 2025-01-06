let Estudiantes = [
    { Nombre: "Ricardo", Calificaciones: [15, 16, 18] },
    { Nombre: "Leonel", Calificaciones: [7, 8, 15] },
    { Nombre: "Andres", Calificaciones: [16, 14, 18] },
    { Nombre: "David", Calificaciones: [20, 20, 19] },
    { Nombre: "Jefferson", Calificaciones: [12, 14, 10] },
    { Nombre: "Mateo", Calificaciones: [8, 6, 7] },
    { Nombre: "Andrea", Calificaciones: [5, 12, 18] },
    { Nombre: "Alison", Calificaciones: [20, 17, 15] },
    { Nombre: "Celeste", Calificaciones: [18, 17, 16] },
    { Nombre: "Alan", Calificaciones: [13, 18, 16] }
];

let Nombre = "Ricardo";
let nuevasCalificaciones = [20, 19];
for (let Estudiante of Estudiantes) {
    if (Estudiante.Nombre === Nombre) {
        let calificacionesActualizadas = [];
        let index = 0;
        for (let i = 0; i < Estudiante.Calificaciones.length; i++) {
            calificacionesActualizadas[index] = Estudiante.Calificaciones[i];
            index++;
        }
        for (let i = 0; i < nuevasCalificaciones.length; i++) {
            calificacionesActualizadas[index] = nuevasCalificaciones[i];
            index++;
        }
        Estudiante.Calificaciones = calificacionesActualizadas;
    }
}

let mejorEstudiante = Estudiantes[0];
let peorEstudiante = Estudiantes[0];
let mejorPromedio = 0;
let peorPromedio = Infinity;

for (let Estudiante of Estudiantes) {
    let suma = 0;
    for (let Calificacion of Estudiante.Calificaciones) {
        suma += Calificacion;
    }
    let promedio = suma / Estudiante.Calificaciones.length;

    if (promedio >= 16) {
        Estudiante.Clasificacion = "Excelente";
    } else if (promedio >= 12 && promedio < 16) {
        Estudiante.Clasificacion = "Bueno";
    } else if (promedio >= 8 && promedio < 12) {
        Estudiante.Clasificacion = "Aprobado";
    } else {
        Estudiante.Clasificacion = "Reprobado";
    }

    if (promedio > mejorPromedio) {
        mejorPromedio = promedio;
        mejorEstudiante = Estudiante;
    }
    if (promedio < peorPromedio) {
        peorPromedio = promedio;
        peorEstudiante = Estudiante;
    }

    let maximo = Estudiante.Calificaciones[0];
    let minimo = Estudiante.Calificaciones[0];
    for (let Calificacion of Estudiante.Calificaciones) {
        if (Calificacion > maximo) maximo = Calificacion;
        if (Calificacion < minimo) minimo = Calificacion;
    }

    console.log(Estudiante.Nombre);
    console.log("Clasificacion: " + Estudiante.Clasificacion);
    console.log("Promedio: " + promedio);
    console.log("Calificacion mas alta: " + maximo);
    console.log("Calificacion mas baja: " + minimo);
    console.log("-----------------------------");
}

console.log(
    "El estudiante con el peor promedio es " +
        peorEstudiante.Nombre +
        " con un promedio de " +
        (peorPromedio)
);
console.log(
    "El estudiante con el mejor promedio es " +
        mejorEstudiante.Nombre +
        " con un promedio de " +
        (mejorPromedio)
);
