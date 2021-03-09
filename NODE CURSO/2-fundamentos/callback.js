//cuando escuchamos que una funcion recibe un callback es solo una funcion que esta dentro de otra funcion 
//y que se va a ejecutar despues en cierto punto del tiempo
//ejemplo
//el argumento que recibe esto es una funcion y el timepo que va a tardar en ejecutarse esa function
/*
setTimeout(() =>{
    console.log('hola mundo dentro del timer')
} , 1000);
*/

const getUsuarioById = ( id ,callback) => {
    //estamos creando un objeto que recibe el id , en ES6 poner una variable con el mismo nombre del valor es redundante , se poner directametne
    //el nombre de la variable ejemplo id:id --> se pondia asi id;
    const usuario = {
        id,
        nombre : "russell"
    }

    setTimeout(()=>{
       callback(usuario)
    } , 1500)
}

getUsuarioById(10 , ( usuario ) =>{
    console.log(usuario.id)//esto es una funcion callback que la recibe nuesta clase
    console.log(usuario.nombre.toUpperCase())
})