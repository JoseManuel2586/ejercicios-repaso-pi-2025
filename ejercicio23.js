require('colors')
const readline = require('readline-sync')


/* 23. Mes del año
_Tema: agrupación de casos_
let mes = 'abril'
Muestra cuántos días tiene el mes:
-   30 días → "abril", "junio", "septiembre", "noviembre"
-   31 días → "enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"
-   28 días → "febrero"
-   Otro → "Mes no válido" */


let mes = readline.question('Ingrese el mes del cual desea saber los dias que tiene: '.gray)

switch(mes){
    case 'abril':
        console.log('30 dias'.blue)
    break
    case 'junio':
        console.log('30 dias'.blue)
    break
    case 'septiembre':
        console.log('30 dias'.blue)
    break
    case 'noviembre':
        console.log('30 dias'.blue)
    break
    case 'enero':
        console.log('31 dias'.green)
    break
    case 'marzo':
        console.log('31 dias'.green)
    break
    case 'mayo':
        console.log('31 dias'.green)
    break
    case 'julio':
        console.log('31 dias'.green)
    break
    case 'agosto':
        console.log('31 dias'.green)
    break
    case 'octubre':
        console.log('31 dias'.green)
    break
    case 'diciembre':
        console.log('31 dias'.green)
    break
    case 'febrero':
        console.log('28 dias'.yellow)
    break
    default:
        console.log('Mes no valido'.red)
    break
}