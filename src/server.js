//Libreria para crear servidores Express
const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('../socket');
//const router = express.Router(); //Poder separar los diferentes peticiones
const db = require('../db')

//const router = require('./components/message/network') 
const router = require('./network/routers');


db('mongodb://<user>:<pass>@<cluster_primary>,<cluster_secondary>/<nombre_de_la_coleccion>?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true');
app.use(bodyParser);
//app.use(router);
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000, function(){
    console.log('La aplicacion esta escuchando en http://localhost:3000');
});
