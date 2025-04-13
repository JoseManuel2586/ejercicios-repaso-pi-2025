require('colors')
const readline = require('readline-sync')


/* 28. Validación de contraseña
_Tema: verificación en `do...while`_
const CONTRASENA_CORRECTA = 'claveSegura'
Repite el ingreso de contraseña hasta que coincida con la correcta.
Muestra `"Contraseña incorrecta"` cada vez que falle y `"Acceso permitido"` al final. */

const CONTRASENA_CORRECTA = 'claveSegura'
let constrasena = 0

do{
constrasena = readline.question('Ingrese su contrasena: '.blue)

console.log(`"Constrasena incorrecta"`.red)

}while(constrasena != 'claveSegura')

console.log(`"Acceso permitido"`.green)