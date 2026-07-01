//Ejercicio 4 
let valorVentas = [120000, 95000, 150000, 80000, 200000];
let acumulador= 0
for (let dias= 0; dias < valorVentas.length; dias ++){
    acumulador = valorVentas [dias] + acumulador 
    console.log ("sumas", acumulador);

}

let promedio = acumulador/valorVentas.length 
console.log ("Promedio", promedio);
