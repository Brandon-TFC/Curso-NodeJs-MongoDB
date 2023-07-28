const model = require('./model');

function addUser(user){
    const myUser = new model(user);
    return myUser.save();
}

function listUser(){
    return model.find();
}

module.exports = {
    add: addUser,
    list: listUser,
    
}