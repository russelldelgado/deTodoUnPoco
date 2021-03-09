
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

//const id =2;

const getEmpleados =  (idnuevo) =>{
    //esta funcion la hemos simplificado mucho se podria hacer de otras maneras mas largas
       return new Promise((resolve , reject)=>{
            const empleado = empleados.find(e => e.id === idnuevo ).nombre;
            //el resolve es una calback que se llamara si todo sale correcto
            //el reject es el error que devolvera si hay algun fallo
            ( empleado ) 
            ? resolve(empleado) 
            : reject(`NO EXISTE EL EMPLEADO CON ID ${idnuevo}`);
           }
       )
    }

const getSalario = ( idnuevo ) => {
    return new Promise((resolve , reject)=>{

        const salarioUnico =  salarios.find( s => s.id === idnuevo).salario;

       ( salarioUnico ) 
        ? resolve(salarioUnico) 
        : reject(`NO EXISTE SALARIO PARA EL ID : ${ idnuevo }`);

    })

}

//async-await --> el await dice que espere la respuesta de la promesa.
//para usar el await tiene que estar dentro de un metodo asincrono
//el asyn lo que hace es transformar el codigo para que devuelva una promesa
const idNuevo = 3;


const getInfoUsuario =  async ( idNuevo ) => {


    try {
        const empleado = await getEmpleados(idNuevo);
        const salario = await getSalario(idNuevo)
    
        return `El salario del empleado ${empleado} es de ${salario}`;
    } catch (error) {
        return error;
    }
   
}

getInfoUsuario(idNuevo)
    .then(msj => console.log(msj))
    .catch(error => console.log(error))


