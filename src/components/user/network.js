const { Router } = require('express');
const response = require('../../network/exports');
const controller = require('./controller');
const { text } = require('body-parser');

router.post('/', function(req, res ){
    controller.addUser(req.body.name)
        .then((data) => {
            response.sucess(req, res, data, 201)
        }).catch((err) => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/', function(req, res){
    controller.listUser()
    .then((users) => {
        response.sucess(req, res, users, 200);   
    }).catch((err) => {
        response.error(req, res, 'Internal error', 500, err);
    });
});

module.exports = router;