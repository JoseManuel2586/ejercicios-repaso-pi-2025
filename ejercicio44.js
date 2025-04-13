require('colors')


/* 44. Aplicar IVA a productos
_Tema: `map()`_
const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
]
Crea un nuevo arreglo con los precios incluyendo 12% de IVA.
Muestra el nuevo arreglo con los precios modificados. */


const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
]
console.log(productos)

let productosConIva = productos.map((iva) => {
    iva.precio = iva.precio * 1.12 
    return iva
})

console.log(productosConIva)


