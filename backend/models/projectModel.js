const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    title: { type: String, requied: true },
    category: String,
    subCategory: String,
    cover: {type : String, default: 'cover-placeholder.png'},
    media: [Object],
    madeBy: { type: Types.ObjectId, ref: 'UserCollection' },
    department: String,
    branch: String,
    batch: Number,
    approved : { type : Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('projects', mySchema);