const { Schema, model} = require('../connection');

const mySchema = new Schema({
    name: {type: String, requied: true},
    email: String,
    password: String,
    role: {type: String, default: 'role'},
    createdAt: {type : Date, default: Date.Now}
});

module.exports = model('UserCollection', mySchema);