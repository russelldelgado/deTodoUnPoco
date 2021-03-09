function electrodomesticos(precioBase = 100, color ='blanco'  ,consumo = 'F'){

     let _precioBase 
    let _color
    let _consumoEnergetico 


     if(/(negro|gris)/.test(color.toLocaleLowerCase())){
         _color = color
     }else{
         _color = 'blanco'
     }



     if(precioBase < 100 || precioBase > 1000){
         _precioBase = 100
     }else{
        _precioBase = precioBase
     }



     if(/([A-E])/.test(consumo)){

        _consumoEnergetico = consumo
     }else{

        _consumoEnergetico = 'F'
     }




    function getPrecio(){
        return _precioBase
    }

    function getColor(){
        return _color
    }
    function getConsumo(){
        return _consumoEnergetico
    }


    function setPrecio(nuevoPrecio){
         _precioBase = nuevoPrecio
    }

    function setColor(nuevoColor){
        _color = nuevoColor
   } 
   
   function setConsumo(nuevoConsumo){
    _consumoEnergetico = nuevoConsumo
}

    function toString(){

        return `El precio es ${_precioBase} , el color es ${_color} y el consumo es ${_consumoEnergetico}`

    }


    function electrodomesticoMasCaro(...arrayDeElectrodomesticos){
        var electrodomesticosmascaros =arrayDeElectrodomesticos[1];

        for (let electrodo in arrayDeElectrodomesticos) {
            console.log(electrodo.getPrecio)
           if(electrodo.getPrecio < electrodomesticosmascaros.getPrecio)
           {
            electrodomesticosmascaros = electrodo;
           }
        }
            return electrodomesticosmascaros
    }

    return{
        getColor : getColor , 
        getConsumo : getConsumo,
        getPrecio : getPrecio , 
        setPrecio : setPrecio ,
        setColor : setColor ,
        setConsumo : setConsumo,
        informacion : toString,
        electrodomesticomascaro : electrodomesticoMasCaro

    }

}


var primerElectrodomestico = electrodomesticos();
var segundoElectrodomestico = electrodomesticos( 300 , 'amarillo' , 'P' )
var tercerElectrodomestico = electrodomesticos( 1220 , 'negro' , 'A' )
/*
console.log(primerElectrodomestico.getColor());
console.log(primerElectrodomestico.getPrecio());
console.log(primerElectrodomestico.getConsumo());
console.log(primerElectrodomestico.informacion());

console.log(segundoElectrodomestico.getColor());
console.log(segundoElectrodomestico.getPrecio());
console.log(segundoElectrodomestico.getConsumo());
console.log(segundoElectrodomestico.informacion());

console.log(tercerElectrodomestico.getColor());
console.log(tercerElectrodomestico.getPrecio());
console.log(tercerElectrodomestico.getConsumo());
console.log(tercerElectrodomestico.informacion());
*/
var array = new Array();
array.push(primerElectrodomestico);
array.push(segundoElectrodomestico);
array.push(tercerElectrodomestico);

var caro = segundoElectrodomestico.electrodomesticomascaro(...[primerElectrodomestico.getPrecio , segundoElectrodomestico.getPrecio , tercerElectrodomestico.getPrecio])
console.log(caro.informacion())