require('colors')
const readline = require('readline-sync')

/* 40. Validar correo electrónico
_Tema: lógica dentro de función_
Crea una función `validarCorreo(correo)`. Debe verificar si el string contiene `"@"` y `"."`
Si es así, muestra `"Correo válido"`, si no, `"Correo inválido"`.
Solicita un correo al usuario. */


function validarCorreo(correo){
let arreglo = Array.from(correo)
let revisionAroba = arreglo.includes('@')
let revisionPunto = arreglo.includes('.')
if(revisionAroba && revisionPunto ){
    console.log(`Correo valido`.green)
}else{
    console.log(`Correo invalido`.red)
}
}


const correo = readline.question(`Ingrese la direccion de correo para validarla: `.blue)

validarCorreo(correo)