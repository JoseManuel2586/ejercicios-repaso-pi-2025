require('colors')

/* 19. Calculadora básica
_Tema: condiciones múltiples + operadores_
let num1 = 12
let num2 = 3
let operacion = '+'
Usa `if/else if` para realizar:
-   Suma, resta, multiplicación o división según `operacion`. Muestra el resultado final. */

let num1 = 12
let num2 = 3

let operacion = '/'

let resultado = 0

if(operacion == '+'){
    resultado = num1 + num2
    console.log(`El resultado de la suma es: ${resultado}`.yellow)
}else if(operacion == '-'){
    resultado = num1 - num2
    console.log(`El resultado de la resta es: ${resultado}`.red)
}else if(operacion == '/'){
    resultado = num1 / num2
    console.log(`El resultado de la division es: ${resultado}`.green)   
}else if(operacion == '*'){
    resultado = num1 * num2
    console.log(`El resultado de la multiplicacion es: ${resultado}`.blue)   
}