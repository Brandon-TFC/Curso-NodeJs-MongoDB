//Libreria para crear servidores Express
const express = require('express');
const bodyParser = require('body-parser');
//const router = express.Router(); //Poder separar los diferentes peticiones
var app = express(); //init
const response = require('./network/exports');
//app.use(bodyParser);
//app.use(bodyParser.urlencoded({extended: false}));


app.get('/message', function(req, res){
    console.log(req.headers);
    res.header({
        "customHeader": "Nuestro valor personalizado", //Dar cabeceras personalizadas al cliente
    });
    response.sucess(req, res, 'Lista de mensajes');
});

app.post('/message', function(req, res){
    console.log(req.query);
    if (req.query.error == 'ok'){
        response.error(req, res, 'Error simulado', 400);
    }else{
        response.sucess(req, res, 'Creado correctamente', 201);
    }
});

app.use('/app', express.static(path.join(__dirname, 'public')));

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');