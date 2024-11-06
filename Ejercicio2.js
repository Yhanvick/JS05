/*Número más alto
Escribe un programa que pida 10 números. Usando operadores lógicos y cualquier otra función o estructura de JavaScript que hayas visto antes, determina y muestra el número más alto de esos números.
*/

let num = []; //esta es mi variable con array que va a almacenar números
let x = 0; //mi variable llamada x, será mi contador, tiene que almacenar 10 números y entonces se inicializa en 0 porque necesito que mi while se detentga en 10
while (x < 10) { // entonces del 0 al 9 son 10 numeros y mi bublce cumple con la condicion de que sea menor que 10. si quisiera que while (x <= 10), entonces let x tendria que ser = a 1
    console.log(x+1); //para decirle que es el primer numero que va ingresar 
    num.push(parseInt(prompt("Ingrese un numero"))); //push me sirve para agregar al array. mi parseInt me va a ayudar a transformar mi string o cadena de texto en números enteros
}
console.log("Ordenando con .sort"); //vamos a ordenar los numeros
num.sort((a, b) => b - a); //mi num.sort ordena los numeros de mayor a menor, enotnces, y la flecha (a, b) => b - a define una función de comparación que le dice al método sort() cómo ordenar los números, entonces primero numeros grandes y despues los menores, descendente 
console.log(num.join(" ")); //mi join va a tomar todos los numeros de mi variable num y los convierte en una sola linea de texto