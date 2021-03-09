//constructores en javascrit


//1-string - nos permite almacenar cadenas

var x1 = new String(); // no es conveniente usar este tipo de constructor
var y1 = "Nombre persona xD"

//es igual para  Numbre y Boolean


//otros tipos de objetos


//4-array

var x4 = new Array() // no es necesario declararlo asi por que tenemos otra opcion
var y4 = [];

//5 regex

var x5 = new RegExp()
var x5 = /(<expresion a incluir>)/

//function

var x6 = new Function()
var y6 = function(){};

//Date

var x7 = new Date();



// Math
//no se puede delcarrar con new porque es un objeto global , ya esta incluido
//dentro de javascritp solo pon Math...........

//object

var x9 = {};



var hola = 'hola mundo como estas hola mundo mhola laiodfoadlfkladfl '

console.log(hola.charAt(16))


//indexOf() nos devuelve la posisicon donde aparece un caracter en ...

console.log(hola.indexOf('ol'))
console.log(hola.lastIndexOf('ol'))

//search no s permite busca una cadena o expresion retgular en otracaden a 


console.log(hola.search('mundo'))

//esto nos permite buscar sol por expresiones regulares.

//match
//compare nos permite comparar cadenas devuelve -1 , 0 , 1

var adios = 'pues bueno esto va despues'

console.log(hola.localeCompare(adios))


//<include> si la cadena incluye el parametro

//console.log(hola.includes('estas'));

console.log(hola.concat(adios));



console.log(hola.repeat(3))


//split nos sirve para dividir caracteres y cadenas
console.log("la cadena hola separa por stapcio es " + hola.split(',',2))


//-------------------------NUMEROS

var numero = 1234

console.log(numero.toString(10)) // este numero es en base 10 si ponemos un dos seria en base dos


//PDEMOS PONER NUMERO CMO OBJETOS

var num = 123

var num2 = new Number(134)
console.log(  typeof num)
console.log(typeof num2)


var maximo = Number.MAX_VALUE;
var minimo = Number.MIN_VALUE;
var infinito = Number.POSITIVE_INFINITY
var infnegativo = Number.NEGATIVE_INFINITY
var numerononumero = Number.NaN
console.log(maximo)
console.log(minimo)
console.log(infinito)
console.log(infnegativo)
console.log(numerononumero)

//metodo dentro de nuemro se meten en minusculas despues del nombre de la variables 
//empezamos por el metodo tofixec
//<numer decimales> nos devuleve una cadena con el numero especifcio de decimames utilizazi
var x = 9.88495

console.log(x.toFixed(0))
console.log(x.toFixed(1))
console.log(x.toFixed(2))
console.log(x.toFixed(10))


//metodo to precicon le decimos el numero de cifras


console.log(x.toPrecision(7))
console.log(x.toPrecision(2))
console.log(x.toPrecision(1))
console.log(x.toPrecision())


//metodo toExponencial , devuelve una cadena con el numero redondeado a notacion cientifi

console.log(x.toExponential(2))


var numeronuevo = 2445355

numerononumero.toString
console.log(numerononumero)


//Number nos devulete el valor numerocio de na variable 

console.log(Number(true))
console.log(Number(false))

console.log(Number(Date()))
console.log(Number('100'))
console.log(Number('case'))

//parseInt y parseFloatj tambien nos vale para convertir valores a valores numerico 

//usamos el math

const mata = Math.PI
console.log(mata)


//podemos obtener con Math el e , ln2 , LN10 , LOOG


//MATH.RAMDON NOS DEVUELVE UN NUEMRO ENTRE CERO Y 1F

for (let index = 0; index < 100; index++) {
    
var numeroAleatorio = Math.random(100);

    var numero =[numeroAleatorio * 100]; 
    console.log( (numeroAleatorio * 100).toFixed(0))


}
console.log( (Math.max(numero)))


//como redondear dos numeros


console.log(Math.round(5.6))
console.log(Math.ceil(5.1))

console.log(Math.floor(5.9))


console.log(Math.floor(Math.random()*11))


//otros metodos de utilidad como son por ejemplo el metodo que no permite extraer una ptencia 

//pow(<base>,<exponente>) devuelve el valor de la potencia

console.log('La potencia de 3 al cuadradoes ' + Math.pow(3,2))

console.log('La raiz de 36 es ' + Math.sqrt(36))

console.log('El valor absoluto de unnumero negativo -5 es ' + Math.abs(-5) )
