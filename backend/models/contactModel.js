const { Schema, model} = require('../connection');

const mySchema = new Schema({
    fname: {type: String, requied: true},
    lname: {type: String, requied: true},
    email: String,
    number: Number,
    detail: String,
    createdAt: {type : Date, default: Date.Now}
});

module.exports = model('contact', mySchema);