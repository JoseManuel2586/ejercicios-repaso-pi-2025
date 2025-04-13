require('colors')
const readline = require('readline-sync')

/* 15. Clasificación de notas
_Tema: else if_
let nota = 83
Imprime:
-   `"A"` si es mayor o igual a 90
-   `"B"` si es entre 80 y 89
-   `"C"` si es entre 70 y 79
-   `"D"` si es entre 60 y 69
-   `"F"` si es menor a 60  */

let nota = Number(readline.question(`Ingrese la nota que desea evaluar: `.blue))

if(nota >= 90){
    console.log(`Su nota es tipo "A"`.green)
}else if(nota >= 80 && nota <= 89){
    console.log(`Su nota es tipo "B"`.yellow)
}else if(nota >= 70 && nota <= 79){
    console.log(`Su nota es tipo "C"`.yellow)
}else if(nota >= 60 && nota <= 69){
    console.log(`Su nota es tipo "D"`.yellow)
}else{
    console.log(`Su nota es tipo "F"`.red)
}
