//nmp init y ponemos los datos


class Persona {

 constructor( nombre , genero , edad){

    if(/[a-z]/.test(nombre)){
        this.nombre = 'persona sin nombre';
    }else{
        this.nombre = nombre
    }


    if(edad = isNaN || edad < 0){
        this.edad = 0
        console.log('la edad es incorrecta o no es un numero')
    }else{
        this.edad = edad
    }


    if(/[M|F]/.test(genero)){
        this.genero = genero
    }else{
        this.genero = 'F'
    }

 }

    meter(...array , nuevoDato){

         var nuevoArray = array.push(nuevoDato)
        return nuevoArray

    }


    bucarPorNombre(...arrayDeDatos , nombre){

        for (const nombres of arrayDeDatos) {
            if(nombres.nombre == nombre){
                var persona = nombres
                return persona
            }else{
                console.log('dato no encontrado')
            }
        }

    }




    toString(){
        return `NOMBRE ${this.nombre}:  EDAD ${this.edad}: GENERO : ${this.genero}`
    }

}

var persona1 = new Persona();
console.log(persona1)
console.log(persona1.toString())

console.log('--------- persona 2 --------')

var persona2 = new Persona('russell' ,  'M' , 22 )
console.log(persona2.toString())

console.log('--------- bucle de personas --------')

var arrayDeElement =[new Persona()];
console.log(arrayDeElement)
for (var index = 0; index <= 10; index++) {
    console.log('entra en bucle')

    arrayDeElement[index].push[new Persona()]
    console.log(arrayDeElement[index])
}


