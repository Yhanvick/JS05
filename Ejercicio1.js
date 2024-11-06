/*Perfil de usuario
Escribe un programa que solicite al usuario su información: nombre de usuario, edad y una lista de sus películas favoritas. Almacena la información y luego muéstrala en la consola. Toma en cuenta que la salida para las películas debe incluir un pequeño mensaje, como: "La película {película} es una de mis favoritas"*/

console.log("Creando Perfil"); //se imprime
let userName = prompt("Ingrese su nombre"); //prompt es mi recuadro para que el usuario pueda escribir lo solicitado en el mensaje
let userAge = prompt("Ingrese su edad");
let userFavoriteMovie = []; //como es un array vacío, va a servir para ir almacenando las peliculas que se vayan ingresando a partr de las condiciones siguientes:

let condition = 0; //con esto me aseguro de que no exista ningún valor "vacío" o desconocido para esta variable antes de empezar, es un simple tecnisismo que se necesita para asegurar que es una entrada vacía, pero necesita de ser 0 en este caso, no como por ejemplo en indices donde el 0 si tiene un valor. La variable condición será la encargada de continuar o detener el bucle
do {
    userFavoriteMovie.push(prompt("Ingrese el nombre de su película favorita")); // el .push() se va a utilizar para poder agregar la película ingresada al array userFavoriteMovie

    condition = parseInt(prompt("Ingrese  1 para agregar otra película, de lo contrario ingrese otro numero")); //parseInt es la función que covertirá mi cadena de texto en un número entero, ya que pront convierte lo ingresado en un string (una cadena de carácteres).Esto mi blucle while siempre va a querer comparar en un numero entero 

} while (condition == 1); // == es mi operador si mis dos valores son iguales, en este caso se compara mi while == 1 con el nuemero entero ingresado antes

console.log(`Perfil\nNombre: ${userName}\nEdad: ${userAge}\nPelículas Favoritas`); // /n me va a indicar un salto de linea, como si fuese enter. ${se imprime la variable}
for (let i = 1; i < userFavoriteMovie.length+1; i++) { /* i = 1 es simplemente para poder comenzar la impresion del listado en 1., 2., 3...
    
    */
    console.log(`\n${i}.  ${userFavoriteMovie[i-1]}`); //Y aquí, entonces en el i = 1 para la impresión, a i-1 se le restará uno para que comience la impresión de mi variable "userFavoriteMovie" desde el índice 0
}
