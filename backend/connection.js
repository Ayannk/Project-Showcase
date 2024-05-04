const mongoose = require('mongoose');

const url = "mongodb+srv://ayankhan:ayan9616@cluster0.m2t2myx.mongodb.net/projectshowcase?retryWrites=true&w=majority&appName=Cluster0";

//asynchronous functions - return promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');    
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;

