require('colors')
const readline = require('readline-sync')

/* 21. Menú de opciones
_Tema: switch + strings_
let opcion = 'editar'
Muestra según el valor de `opcion`:
-   `"ver"` → "Mostrando perfil"
-   `"editar"` → "Editando datos"
-   `"salir"` → "Saliendo del sistema"
-   Otro → "Opción no válida" */

let opcion = readline.question(`Ingrese en letras minusculas unas de las opciones deseadas

                            ver
                            editar
                            salir
                            otro
    `.yellow)

switch(opcion){
    case 'ver':
        console.log('Mostrando perfil'.green)
    break
    case 'editar':
        console.log('Editando datos'.blue)
    break
    case 'salir':
        console.log('Saliendo del sistema'.gray)
    break
    default:
        console.log('Opcion no valida'.red)
    break
}