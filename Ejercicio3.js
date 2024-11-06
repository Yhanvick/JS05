/*Alarma
Escribe un programa que le pida al usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.

Ejemplo de resultado: "Hora de dormir después de 10 segundos".
*/
let segundos = prompt("Ingrese cuantos segundos para la alarma"); 

function mensaje() //mi funcion almacena un procedimiento a realizar que mostrara un mensaje
{
    console.log(`Ya pasaron los ${segundos} Segundos.`); //se imprime en la consola los segundos ingresados anteriormente 
}
setTimeout(mensaje, segundos*1000); //con mi setTimeout puedo hacer que se demore la respuesta, en donde mi variable de los segundos ingresados se va a multiplicar x 1000 segundos