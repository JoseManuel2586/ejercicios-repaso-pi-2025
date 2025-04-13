require('colors')
const readline = require('readline-sync')

/* 42. Agregar un producto al carrito
_Tema: `push()`_
const carrito = ['Pan', 'Leche', 'Huevos']
Agrega `"Queso"` al final del arreglo.
Muestra el carrito actualizado. */

const carrito = ['Pan', 'Leche', 'Huevos']
console.log('Carrito original: '.yellow + carrito)
carrito.push('Queso')
console.log('Carrito actualizado: '.green + carrito)

