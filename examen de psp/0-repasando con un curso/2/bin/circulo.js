//calcula el perimetro y el area de un circulo



if(process.argv.lenth < 3){
    console.log('faltan argumentos')
    process.exti(1)
}
    
    if(isNaN(process.argv[2])){
    console.log( `${process.argv[2]} no es un numero`)
    process.exit(2)
    
}



var radio = process.argv[2] * 1;
var area = Math.PI * Math.pow(radio , 2)
var perimetro = 2 * Math.PI * radio;


console.log(`el area de un circulo de radio ${radio.toFixed(2)} es ${area.toFixed(2)} y tiene un perimetro de ${perimetro.toFixed(2)}`)


function calcularAreaDeCirculo(){

    


}