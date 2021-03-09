//esto es el infierno de los callback

const empleados =[
    {
        id: 1,
        nombre: 'russell'
    },
    {
        id:2,
        nombre : 'dayanna'
    },
    {
        id: 3,
        nombe : 'nuria'
    }
];

const salarios =[
    {
        id: 1,
        salario: 1000
    },
    {
        id:2,
        salario: 1500
    }
];

const id =3;

const getEmpleados =  (id) =>{
    //esta funcion la hemos simplificado mucho se podria hacer de otras maneras mas largas
       return new Promise((resolve , reject)=>{
            const empleado = empleados.find(e => e.id === id ).nombre;
            //el resolve es una calback que se llamara si todo sale correcto
            //el reject es el error que devolvera si hay algun fallo
            ( empleado ) 
            ? resolve(empleado) 
            : reject(`NO EXISTE EL EMPLEADO CON ID ${id}`);
           }
       )
    }

const getSalario = ( id ) => {
    return new Promise((resolve , reject)=>{

        const salarioUnico =  salarios.find( s => s.id === id).salario;

       ( salarioUnico ) 
        ? resolve(salarioUnico) 
        : reject(`NO EXISTE SALARIO PARA EL ID : ${ id }`);

    })

}

/*
getEmpleados(id)
        .then(empleado=>console.log(empleado))
        .catch(error => console.log(error));

getSalario(id)
        .then(salario => console.log( salario ))
        .catch(error => console.log( error ));
        */

getEmpleados(id)
                .then( empleado => {
                    getSalario(id)
                            .then(salario =>{
                            console.log('EL EMPLEADO' , empleado , 'TIENE UN SALARIO DE ', salario);
                        }
                         ).catch(error => console.log(error));
                } )
                .catch(error => console.log(error));