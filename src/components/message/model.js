const mongoos = requir('mongoos');

const schema = mongoos.schema;

const mySchema = new schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },

    user: {
        type: schema.ObjectId,
        ref: 'User',
    },

    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String,
});

const model = mongoos.model('Message', mySchema); //Usar para cualquier modificacion en la db de los menssage
module.exports = model;