//declaramos una funcion

//primero ponemos function -- despues le ponemos el nombre de la funcion

// funciones anonimas son aquellas que no tienen nombre
//se invocan llamando a la variable que las almacena.

//podriamos almacenar esta funcion en todas las variables que quisieramos

//en que consiste un constructor function

//esto de aqui abajo te funciona en el html no en js
//var mifuncion = new function(a  ,b , return a+b;)


var producto = function(a , b){return a + b};


var precio =  producto(2 ,3);

console.log(precio);

//funciones anonimas autoinvocadas (esto es una locuraaaaaaaaaa joder)

(function(){alert ("hola");}());


//una funcion puede tener cero o mas parametros
//parametros son los nombres que aparecen en la definicion de un funcion
/** 
 * los parametros no se verifican su tipo
 * no se verifican los tipos de los argumentos
 * no se comprueba el numero de los argumentos recibidos
*/


//parametros por defecto 
//cuando llamamos una funcion con menos argumento sde los declarados
//en este caso los valores que faltan no estn definidos



function suma (a , b){
    //no le pasa el parametro b
    if(b===null)
        b=0
    //pasamos mas argumentos de la cuenta

    return a+b;
}


//function valores(){alert arguments.length()};


//empezamos con los bucles





