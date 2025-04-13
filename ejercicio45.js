require('colors')

/* 45. Filtrar estudiantes aprobados
_Tema: `filter()`_
const estudiantes = [
    { nombre: 'Ana', nota: 85 },
    { nombre: 'Luis', nota: 45 },
    { nombre: 'Carla', nota: 70 },
]
Filtra y muestra los estudiantes cuya nota sea **mayor o igual a 60**. */


const estudiantes = [
    { nombre: 'Ana', nota: 85 },
    { nombre: 'Luis', nota: 45 },
    { nombre: 'Carla', nota: 70 },
]


function filtro(estudiantes){
    estudiantes.filter((not) =>{
        return not = not.nota >= 60
    })
return estudiantes
}


let resultado = filtro(estudiantes)

console.log(resultado)