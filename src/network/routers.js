const express = require('express');
const message = require('../components/message/network')
const user = require('../components/user/network')
const chat = require('../components/chat/network')

const routes = function(server){
    server.use('/message', message); //Traer y llamar nuestro componente de message
    server.use('/user', user); //Traer y llamar nuestro componente de message
    server.use('/chat', chat);

}

module.exports = routes;