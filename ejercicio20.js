require('colors')
const readline = require('readline-sync')

/* 20. Día de la semana
_Tema: switch + números_
let numeroDia = 3
Usa `switch` para mostrar el día correspondiente:
-   1 → "Lunes"
-   2 → "Martes"
-   3 → "Miércoles"
-   4 → "Jueves"
-   5 → "Viernes"
-   Cualquier otro número → "Día inválido" */


let numeroDia = Number(readline.question('Ingrese el numero de dia que deseas saber: '.blue))

switch(numeroDia){
    case 1:
        console.log('Lunes'.green)
    break
    case 2:
        console.log('Martes'.green)
    break
    case 3:
        console.log('Miercoles'.green)
    break
    case 4:
        console.log('Jueves'.green)
    break
    case 5:
        console.log('Viernes'.green)
    break
    case 6:
        console.log('Sabado'.green)
    break
    case 7:
        console.log('Domingo'.green)
    break
    default:
        console.log('Numero no corresponde a un dia'.red)
    break
}