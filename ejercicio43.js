require('colors')


/* 43. Eliminar el último producto del carrito
_Tema: `pop()`_
const carrito = ['Pan', 'Leche', 'Huevos', 'Queso']
Elimina el último producto y muestra:
-   El producto eliminado.
-   El carrito actualizado. */


const carrito = ['Pan', 'Leche', 'Huevos', 'Queso']
const ult = carrito.length - 1 
console.log(`El carrito original es: ${carrito}`.blue)
console.log(`El producto eliminado es: ${carrito[ult]}`.yellow)
carrito.pop()
console.log(`El carrito actualizado es: ${carrito}`.green)


