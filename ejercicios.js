//Ejercicio 1
let numero1 = 7 ;

if (numero1 % 3 == 0 && numero1 % 5 == 0) {
    console.log("Fizzbuzz"); 
}else if(numero1 % 3 == 0)
{ console.log ("Fizz")

}else if (numero1 % 5 == 0){
    console.log ("Buzz")
}else { 
    console.log ("numero:" + numero1);
}

// Ejercicio 2
for(let numero= 1 ; numero <= 10 ; numero+=1){
    console.log (numero1,"x",numero , "=", numero1 * numero)
}

//Ejercicio 3 

let incremento = 1;
while(incremento <= 20){
    if(incremento% 2 == 0) {
        console.log("Persona A", incremento);

    } else {
        console.log( "Persona B", incremento);
    }
    incremento +=1
}
//Ejercicio 4 
