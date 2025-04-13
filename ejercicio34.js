require('colors')
const readline = require('readline-sync')


/* 34. Promedio por estudiante (matriz)
_Tema: matriz + anidado_
const notas = [
    [80, 90, 100], // Estudiante 1
    [70, 60, 75], // Estudiante 2
    [88, 95, 92], // Estudiante 3
]

Calcula y muestra el promedio de cada estudiante en una lista. */


const notas = [
    [80, 90, 100], // Estudiante 1
    [70, 60, 75], // Estudiante 2
    [88, 95, 92], // Estudiante 3
]

function promedio(notas) {
    
    let prom = 0

        for(let i = 0; i < notas.length; i++){
            let suma = 0
            prom = notas[i].length

            for(let index = 0; index < prom; index++){
            
                suma += notas[i][index]
                
            }
            let promediar = (suma/prom).toFixed(2)
            console.log(`El promedio del estudiante ${i + 1} es: ${promediar}`)
        }
    
}



promedio(notas)