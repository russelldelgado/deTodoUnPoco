var datos = ['dato1' , 'dato22' , 'dato22' , 'dato22' , 'dato22', 'dato22', 'dato22' ]

var comprobar = datos.filter(key => key.length > 5)

console.log(comprobar)


var personas = ['russell' , 'jhoel' , ' delgado ' , ' muñoz' ,'people']

var filtrandoArussell = personas.filter( (mi) => {
    if(/russe/.test(mi))
    {
console.log(mi)
    }
    

})

