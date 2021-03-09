const personal = [
    { nombre : 'Juan', activo : true , edad : 25 },
    { nombre : 'Juana', activo : true , edad : 55 },
    { nombre : 'Ismael ', activo : false , edad : 65 },
    { nombre : 'Luisa', activo : false , edad : 45 } ,
    { nombre : 'Carmen', activo : true , edad : 22 } ,
    { nombre : 'Esperanza', activo : false , edad : 25 }
    ]
    


    let sumaedadPersonalActivo = personal.filter(persona => persona.activo == true)
    .map(persona.edad)
    .reduce((edad , incremento) => edad + incremento)

    console.log(sumaedadPersonalActivo)