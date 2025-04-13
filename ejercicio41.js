require('colors')
const readline = require('readline-sync')
/* 41. Generar contraseña aleatoria
_Tema: lógica con bucle dentro de función_
Crea una función `generarContraseña(longitud)`. Debe retornar una contraseña aleatoria con letras y números.
Ejemplo: `"a7d3g8"` si la longitud es 6.
(No necesitas usar caracteres especiales). */


function generarCodigo(longitud) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let resultado = ''

    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length)
        resultado += caracteres[randomIndex]
    }

    return resultado
}

const codigo = generarCodigo(6)
console.log(`Tu código generado es: ${codigo}`.yellow)
