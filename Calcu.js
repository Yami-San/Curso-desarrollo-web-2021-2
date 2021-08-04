"use strict";
let value1 = 0;
let value2 = 0;
console.log("Escriba sus operaciones")
let operations = "";
let input = "";
var prompt = require('prompt-sync')();
//
// get input from the user.
//
let salir = Boolean(false);
do
{
    console.log("Pon 1 para usar la calculadora reiniciada");
    console.log("Pon 2 para usar la calculadora con el ultimo valor");
    console.log("Pon 3 para salir");
    input = prompt("su respuesta: ");
    if(input == 1)
    {
        value1 = prompt("Digite su primer número: ");
        value2 = prompt("Digite su segundo número: ");
        digiteOperations();
        input = prompt("su respuesta: ");
        DoOperations(input, value1, value2);
    }
    else if(input == 2)
    {
        console.log("el valor del primer numero es: "+value1);
        value2 = prompt("Digite su segundo número: ");
        digiteOperations();
        input = prompt("su respuesta: ");
        DoOperations(input, value1, value2);
    }
    else if(input == 3)
    {
        salir = true;
    }
    else
    {
        console.log("Se reiniciara el programa")
    }
} while(!salir) ;

function digiteOperations()
{
    console.log("Pon 1 para sumar");
    console.log("Pon 2 para restar");
    console.log("Pon 3 para multiplicar");
    console.log("Pon 4 para dividir");
    console.log("Pon 5 para salir");
}

function DoOperations(input, number1, number2)
{
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    if(input == 1)
    {
        console.log("La respuesta es: "+(number1+number2));
        value1 = number1+number2;
    }
    else if(input == 2)
    {
        console.log("La respuesta es: "+(number1-number2));
        value1 = number1-number2;
    }
    else if(input == 3)
    {
        console.log("La respuesta es: "+(number1*number2));
        value1 = number1*number2;
    }
    else if(input == 4)
    {
        console.log("La respuesta es: "+(number1/number2));
        value1 = number1/number2;
    }
    else if(input == 5)
    {
        salir = true;
    }
    else
    {
        console.log("Se reiniciara el programa")
    }
}