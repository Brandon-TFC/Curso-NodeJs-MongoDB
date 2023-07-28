const express = require('express');
const app = express();
const server = require('http').server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', function(socket){
    console.log('Nuevo cliente conectado');
    socket.emit('Mensaje', 'Bienvenido listo');
});

setInterval(function(){
    io.emit('Mensaje', 'Hola les escribo a todos');
}, 3000);


server.listen(8080, function(){
    console.log('Servidor iniciado en http://localhost:8080');
});