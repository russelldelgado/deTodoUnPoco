
class Electrodomestico{


    constructor(precio , color , consumoElectronico){
        
 //ponemos las caracteristicas del preco
        if(precio < 100 | precio > 1000){
           this.precio = 100
        }else {
            this.precio = precio
        }
// ponemos las caracteristicas del color

        if(/(negro|rojo)/.test(color)){
        this.color = color
        }else{
            this.color= 'blanco'
        }


        //ponemos las caracteristicas del consumo electronico.

        if(/([A-Z])/.test(consumoElectronico)){
            this.consumoElectronico = consumoElectronico

        }else{
            this.consumoElectronico = 'F'
        }


    }

    toString(){

        return `precio : ${this.precio} color : ${this.color} consumo : ${this.consumoElectronico}`
    }

}


var e1 = new Electrodomestico(500 , 'rojo' , 'A');
console.log(e1.toString())