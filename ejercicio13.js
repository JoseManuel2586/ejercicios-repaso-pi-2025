require('colors')

/* 13. Calificación mínima
_Tema: if-else_
let nota = 55
Si la nota es mayor o igual a 60, imprime `"Aprobado"`. Si no, imprime `"Reprobado"`. */


let nota = 55

if(nota >= 60){
    console.log(`Aprobado`.green)
}else{
    console.log(`Reprobado`.red)
}