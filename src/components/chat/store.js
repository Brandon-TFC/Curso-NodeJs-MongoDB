const { resolve } = require('path');
const model = require('./model');
const { rejects } = require('assert');
const { error } = require('console');

function addChat(chat) {
    const myChat = new model(chat);
    return myChat.save();
}

function listChats(userId){
    return new Promise((resolve, reject) =>{
        let filter = {};
        if(userId){
            filter ={
                users: userId,
            }
        }

        model.find(filter)
        .populate('users')
        .exec((err, populated) =>{
            if(err){
                reject(err);
                return false;
            }
            resolve(populated);    
        });
        
    });
}
module.exports = {
    
}