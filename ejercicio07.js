require('colors')

/* 7. Aplicar descuento
_Tema: operadores aritméticos y porcentaje_
let precioOriginal = 200
let descuento = 20 // porcentaje
Calcula y muestra el precio final después del descuento. */


const precioOriginal = 200
let descuento = .20
let precioConDescuento = precioOriginal - (precioOriginal * descuento)

console.log(`El precio de ${precioOriginal} con un 20% de descuento es de: ${precioConDescuento}`.yellow)