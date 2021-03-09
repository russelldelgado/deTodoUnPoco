var animal ={
nombre :'perrete',
raza : 'doberman',
edad : 22 ,
nacionalidad : 'española',
gato :{
    nombre : 'foking cat',
    apellidos : 'joder un gato con apellidos',
    pais : 'gato españolo' , 
    provincia :'ni puta idea gato'

}
}




          for (const gato in animal) {
              if (animal.hasOwnProperty(gato)) {
                  const element = animal[gato];
                  console.log(element)
                  
              }
          }


var persona1 = {

    nombre = 'valor',
    apellido = ''
}


var persona2={}


persona2.nombre = ' pepe'
persona2.apellido = 'juancarlos'

persona2['edad'] = 33
persona2