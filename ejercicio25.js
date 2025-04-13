require('colors')
const readline = require('readline-sync')

/* 25. Menú interactivo (simulado)
_Tema: `do...while`_
Simula un menú que se muestra al menos una vez.
Si `opcion` es `"A"`, muestra `"Bienvenid@"`.
Si `opcion` es `"B"`, permita la entrada de un nombre y muestra `"Bienvenid@ ${nombreIngresado}"`.
Repite mientras `opcion` no sea `"3"`. */


let menuInteractivo = 0

do{
menuInteractivo = readline.question(`
    Ingresa un numero de las opcinoes del menu

    1. Saludo
    2. Saludo personalizado
    3. Salir

    `.gray)

console.clear()
switch(menuInteractivo){
case '1':
    console.log('============================================='.yellow)
    console.log('Bienvenid@'.green)
    console.log('============================================='.yellow)
break
case '2':
    let nombre = readline.question(`Ingrese su nombre: `.blue)
    console.log('============================================='.yellow)
    console.log(`Bienvenid@ ${nombre}`.green)
    console.log('============================================='.yellow)
break
case '3':
    console.log('============================================='.yellow)
    console.log('Gracias por usar nuestra aplicacion'.yellow)
    console.log('============================================='.yellow)
break
default:
    console.log('============================================='.yellow)
    console.log('La opcion no es valida'.red)
    console.log('============================================='.yellow)
break
}

}while(menuInteractivo != '3')