//ES5
//const express = require('express');

//ES6
import axios from 'axios';
import express from 'express';
import handler from './endpoints/users';
import bodyParser from 'body-parser';

const app = express();
const port = 3000
//esto nos vale para parsear el codigo si vienen en json
//o si vienen desde el formulario
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json);

app.get('/' ,(req , resp)=>{
    resp.send('servicio web')
})
//cuando en nuestra web pongamos la ruta /user llamaremos a la funcion de handler.getall
//que nos trae a todos los usuarios de un sitio determinado.
app.get('/users' , handler.getAll);
app.get('/users/:id' , handler.getById);
app.post('/users' , handler.createUser);
app.delete('/users/:id' , handler.deleteUserById);
app.put('/users/:id' ,handler.updateById);




app.listen(port , ()=>{
    console.log(`servicio en http://localhost:${port}`)
})