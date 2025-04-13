require('colors')

/* 14. Descuento por edad
_Tema: condición múltiple_
let edad = 68
Muestra `"Descuento especial"` si tiene **menos de 12** o **más de 65 años**. De lo contrario, muestra `"Sin descuento"`. */

let edad = 68

if(edad < 12){
    console.log(`Descuento especial`.green)
}else if(edad >= 65){
    console.log(`Descuento especial`.green)
}else{
    console.log(`Sin descuento`.red)
}
