const mongoos = requir('mongoos');

const schema = mongoos.schema;

const mySchema = new schema({
    name: String,
    
});

const model = mongoos.model('User', mySchema); //Usar para cualquier modificacion en la db de los menssage
module.exports = model;