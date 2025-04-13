require('colors')
const readline = require('readline-sync')

/* 18. Validar usuario y contraseña
_Tema: doble condición_
let usuario = 'admin'
let contrasena = '1234'
Verifica si ambos valores son correctos.
Si lo son, imprime `"Acceso permitido"`; si no, `"Datos incorrectos"`. */

let usuario = readline.prompt({prompt: 'Ingrese su Usuario: '.yellow})
let constrasena = readline.question('Ingrese su contrasenia: ' , '1234')

if(usuario == 'admin' && constrasena == '1234'){
    console.log(`"Acceso permitido"`.green)
}else{
    console.log(`"Datos incorrectos"`.red)
}
