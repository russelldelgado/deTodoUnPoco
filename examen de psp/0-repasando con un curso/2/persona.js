const sexo = {
    MASCULINO : 'masculino' , 
    FEMENINO : 'femenimo'
}


const personas = (nombre , sexo , edad) =>{

let _nombre , _edad 



_nombre = nombre
_edad = edad 
_sexo = sexo

function getNombre (){
    return _nombre
}

function getEdad (){
    return _edad
}

function getSexo (){
    return _sexo
}


function toString(){
    return `NOMBRE : ${_nombre} , EDAD : ${_edad} , SEXO : ${_sexo}`
}


function meterPersona(nuevoArray , persona){
nuevoArray.push(persona)
return true


}

return { getNombre : getNombre , getEdad : getEdad , getSexo : getSexo
, informacion : toString, meterPersona : meterPersona
}
}


let p1 =personas('russell' , sexo.MASCULINO , 22)
let p2 =personas('russell' , sexo.MASCULINO , 22)
let p3 =personas('nuria' , sexo.FEMENINO , 22)
let p4 = personas('chamoroo' , sexo.MASCULINO,33)

let nuevoArray = []

nuevoArray.push(p1)
nuevoArray.push(p2)
nuevoArray.push(p3)



p1.meterPersona(nuevoArray , p4)

console.log(nuevoArray)

for (let iterator of nuevoArray) {
    console.log(iterator.informacion())
}






