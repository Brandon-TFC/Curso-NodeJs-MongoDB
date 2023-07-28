const express = require('express');
const multer = require('multer');
const response = require('../../network/exports');
const controller = require('./controller');
const { text } = require('body-parser');


const upload = multer({
    dest: 'public/files',
});

app.get('/', function(req, res){
    const filterMessage = req.query.user || null;
    controller.getMessages(filterMessage)
    .then((messageList) => {
        response.sucess(req, res, messageList, 200);
    })
    .catch(e =>{
        response.error(req, res, 'Unexpected error', 500, e);
    })
});
app.post('/', upload.single('file'), function(req, res){
    //console.log(req.file);
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage) =>{
            response.sucess(req, res, fullMessage, 201);

        }) .catch( e =>{
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');

        });
});

router.patch('/:id', function(req, res){
    controller.updateMesaage(req.params.id, req.body.message)
    .then((data)=>{
        response.sucess(req, res, data, 200)
    })
    .catch(e=> {
        response.error(req, res, 'Error interno', 500, e);
    });
    
})

router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
        .then(() =>{
            response.sucess(req, res, 'Usuario ${req.params.id} eliminado', 200) //Comillas invertidas para usar
        })
        .catch(e =>{
            response.error(req, res, 'Error interno', 500, e);
        })
})

module.exports = router;