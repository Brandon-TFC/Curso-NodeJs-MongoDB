const { resolve } = require('path');
const store = require('./store');
const { socket } = require('../../../socket').socket;




function addMessage(chat, user, message, file){
    return new Promise((resolve, reject) =>{
        if (!user || !message){
            console.error('[Message controller] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        
        }

        let fileUrl = '';
        if (file){
            fileUrl = 'http://localhost:3000/app/files/' + file.filename;
        }

        console.log(user);
        console.log(message);

        const fullMessage ={
            chat: chat,
            user: user,
            message: message,
            date: new Date(), 
            file: fileUrl,
        };

    store.add(fullMessage);

    socket.io.emit('Message', fullMessage);

    resolve(fullMessage);
    });
    
}

function getMessages(filterUser){
    return new Promise((resolve, reject) =>{
        resolve(store.list(filterUser));
    })
}

function updateMesaage(id, message){
    return new Promise(async(resolve, reject) =>{ //Tener cuidado donde ponemos el async ya que se lo hubieramos puesto en la funcion estaria fuera el await
        console.log(id);
        console.log(message);
        if (!id || !message){
            reject('Invalid data');
            return false;
        }

       const result = await store.updateText(id, message);
       resolve(result);
    })
}

function deleteMessage(id){
    return new Promise((resolve, reject) =>{
        if (!id){
            reject('Parametro con id invalido');
            return false;
        }
        store.remove(id)
            .then(() =>{
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    });
}
module.exports = {
    addMessage,
    getMessages,
    updateMesaage,
    deleteMessage,
};