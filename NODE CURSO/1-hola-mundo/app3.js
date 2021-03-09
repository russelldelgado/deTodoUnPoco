console.log("inicio del programa")
//un callback es una funcion que se manda como argumento a otra funcion

//este es un contenido no bloqueante es decir no para la ejecucion del programa 
setTimeout(()=>{
    console.log('Primer timer')
} , 3000)

//estas funciones se meten en una pila y cuando tiene timepo salen a relucir mientras no .
setTimeout(()=>{
    console.log('Segundo timer')
} , 0)

setTimeout(()=>{
    console.log('Tercer timer')
} , 0)

console.log("fin del programa")

