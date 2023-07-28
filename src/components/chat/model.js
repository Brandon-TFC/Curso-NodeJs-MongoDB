const mongoos = requir('mongoos');

const schema = mongoos.schema;

const mySchema = new Schema({ users:[{ type: Schema.ObjectId, ref: User}] });

const model = mongoos.model('Chat', mySchema); //Usar para cualquier modificacion en la db de los menssage
module.exports = model;