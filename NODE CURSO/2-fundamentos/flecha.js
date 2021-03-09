/*function sumar(a , b =10){
    return a + b;
}
*/
//esta de aqui arriba es la manera tradicinal de indicar que vamos ha crear una function 
//pero nosotros solo la utilizaremos rara vez ya que hay una manera mejor y mas eficiente que es la que explica a continuacion ;
/*
const sumar = (a,b=10)=>{
    return a + b
}
*/
//las ventajas de usar la function de flecha es que el codigo de arriba podermo hacerlo mucho mas simpole
//con el igual lo que hacemos es indicarle que le vamos a pasar un valor por defecto si la person ano le pasa ninguno 
const sumar = (a,b = 10)=>a+b;
const saludar = () => console.log('hola mundo')


saludar()
console.log(sumar(20 ))

