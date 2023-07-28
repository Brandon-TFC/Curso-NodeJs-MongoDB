const { resolve } = require('path');
const model = require('./model');
const { rejects } = require('assert');
const { error } = require('console');

function addMessage(message){
    //list.push(message);
    const myMessage = new model(message);
    myMessage.save();
}

async function getMessage(filterUser){
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser !== null) {
            filter = { user: filterUser }
    }
    model.find(filter)
        .populate('user')
        .exec((error, populated) =>{
            if(error){
                reject(error);
                return false;
            }
            resolve(populated);
        });
    })
}

async function updateText(id, message){
    const foundMessage =  await model.findByid({
    _id: id
    });

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id){
    model.deleteOne({
        _id: id
    });
}


module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage,
}