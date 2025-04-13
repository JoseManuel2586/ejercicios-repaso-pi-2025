require('colors')
const readline = require('readline-sync')

/* 22. Tipo de transporte
_Tema: switch con texto_
let tipo = 'bicicleta'
Muestra:
-   "Vehículo con motor" para `"carro"` o `"moto"`
-   "Vehículo sin motor" para `"bicicleta"` o `"patineta"`
-   "Tipo desconocido" si no coincide con ningún caso */

let tipoVehiculo = readline.question(`
    Ingrese el tipo de vehiculo que desea evaluar
    Opciones disponibles
    - carro
    - moto
    - bicicleta
    - patineta


    `.yellow)
console.clear()
switch(tipoVehiculo){
    case 'carro':
        console.log(`============Vehiculo con motor============`.green)
    break
    case 'moto':
        console.log(`============Vehiculo con motor============`.yellow)
    break
    case 'bicicleta':
        console.log(`============Vehiculo sin motor============`.blue)
    break
    case 'patineta':
        console.log(`============Vehiculo sin motor============`.gray)
    break
    default:
        console.log(`============Tipo desconocido============`.red)
    break
}

