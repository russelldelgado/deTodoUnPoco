//si lo igualamos a {} le estamos diciendo que es un objeto literal
const deadpoll = {
    nombre: "pepe",
    apellidos:"delgado",
    poder:"regeneracion",
    edad : 89,
    getNombre(){
        return `${this.nombre} ${this.apellidos} ${this.poder}`
    }
}

//la funcion de get nombre es mas sencilla si hacemos getNombre(){return....}
//otra opcion es getnombre : function(){return....}

//console.log(deadpoll.getNombre());

/*
const nombre = deadpoll.nombre;
const apellidos = deadpoll.apellidos;
const poder = deadpoll.poder;
*/
//esto de aqui arriba es igual a lo que vamos a poner aqui abajo para 
//desestructurar un objeto de una manera mucho mas rapida y eficiente

//const {nombre , apellidos , poder , edad = 0 } = deadpoll;
/*
function imprimeHeroe(heroe)
{
const { nombre , apellidos ,poder , edad =0} = heroe;
console.log(nombre , apellidos , poder , edad)

}
*/

//puedo desestructurar los datos en cuatno se los paso por argumento

function imprimirHeroe( { nombre , apellidos, poder, edad = 0} ){
    console.log(nombre , apellidos , poder , edad)
}


imprimirHeroe(deadpoll);


//console.log(nombre , apellidos , poder , edad)

//desestructurando arreglos

const heroes = [ "russell" , "nuria" , 'dayanna'];

const [h1 ,h2 , h3] = heroes;
console.log(h1 ,h2 , h3)
//si querio indicar que en mis arreglos no me interesan algunas posiciones lo que hago es poner cosas con espacios

const [, , nuevo] = heroes;

console.log(nuevo)