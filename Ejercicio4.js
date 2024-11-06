/*Palíndromo
Escribe un programa que pida una palabra o frase (puede estar en mayúsculas, tener espacios y puntuación). Determina si la palabra/frase es un palíndromo o no, ignorando la puntuación, los espacios y las letras mayúsculas */

function esPalindromo(texto) { // se crea la funcion para poder determinar si una frase io palabra es un palíndromo, por lo que (texto) sera el parámetro de mi función 
    let textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');; //toLowerCase va a convertir a todas las palabras o frases a minúsculas. Por otro lado mi fución replace reemplaza en el texto (/[^a-z0-9]/g, '') que va a buscar todo lo que no sea una letra o un numero , de la "a" a la "z" y del numero 0 al 9. por otro lado, "g" va a reemplazar cualquier coincidencia, en donde '' que es mi cadena vacia se reemplaza, por lo que se elimina espacios, comas y cualquier otro simbolo
    let textoInvertido = textoLimpio.split('').reverse().join(''); // aca entonces el split me ayudara a separar cada elemento y reverse tomara el array y lo pondra al reves, y por ultimo mi funcion join va a juntar todas las letras en una cadena. 

    return textoLimpio == textoInvertido; //se compara de esta manera la parabra original sin caracteres especiales ni mayusculas con su contraparte invertida con mis funcuiones anteriores.
}

let entrada = prompt("Introduce una palabra:"); //con en pront se deja el espacio para que el usuario ingrese su palabra 
if (esPalindromo(entrada)) { //llamo mi función de esPalindromo, que se ejecuta con al entrada del usuario 
    console.log("Es un palíndromo.");
} else {
    console.log("No es un palíndromo.");
}