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


//nos creamos una function que nos permita traernos la informacion de los salarios y de los usuario;

const getEmpleados =  (id , callback) =>{
//esta funcion la hemos simplificado mucho se podria hacer de otras maneras mas largas
    const empleado = empleados.find(e => e.id === id )

    if(empleado){
        callback (null,empleado); // como esta funcion recibe dos parametro que son el error y el empleado
                                    //si le mandamos null no se ejecuta el error ya que null significa flase
    }else{
        callback(`empleado con ID : ${id} no existe`) 
    }

}

const getSalarios = (id , callback)=> {

    const salario = salarios.find(s => s.id === id)//?.salario //esta interrogacion me sirve por si regresa null no haga lo de .salario
   //const usuario = getEmpleados(id)
    if(salario){
        callback(null , `El salario ${salario.salario} es del id ${salario.id}`) 
    }else{
        callback(`No existe salario para el id ${salario.id}`)
    }
}


const id = 2;

//console.log(getEmpleados(10));

//IMAGINEMOS QUE NO LO QUEREMOS HACER ASI SI NO CON UNA CALLBACK

getEmpleados(id , (err ,empleado )=>{
    if(err){
        console.log('ERROR!!')
        return console.log(err)
    }
    console.log("empleado existe")
    console.log(empleado)
    
})

getSalarios(id , (error , salario)=>{
    if(error){
        console.log('ERROR')
        return console.log(error);
    }
    console.log('sueldo del empleado')
    console.log(salario);
});



