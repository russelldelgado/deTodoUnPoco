
db.createUser({
    user : 'russell',
    pwd : '123',
    roles : ['readWrite' , 'dbAdmin'] 
})


//clientes mongo
db.clientes.insert(
{
    firsName : 'isac',
    lastName : 'Asimov'
})


db.clientes.insert(
    [
    { firsName : 'russell' , lastName : 'delgado'} , 
    {firsName : 'dayanna' , lastName : 'muñoz'},
    {firsName : 'nuria' , lastName: 'beteta'}
]
)

db.clientes.find({
firsName:'isas'

},{})
