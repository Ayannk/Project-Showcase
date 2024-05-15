//import express
const cors = require('cors'); 
const express = require('express');

const userRouter = require('./routers/userRouter');
const contactRouter = require('./routers/contactRouter');
const projectRouter = require('./routers/projectRouter');
const utilRouter = require('./routers/util');

//initialize expess
const app = express();
const port = 5000;

//middleware


app.use(cors(
    {origin: ['http://localhost:3000']}
));

app.use(express.json());
app.use('/user', userRouter);
app.use('/contact', contactRouter);
app.use('/project', projectRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));

app.get('/', (req, res) => {
    res.send('Response from express');
});

app.get('/add', (req, res) => {
res.send('Add Response from express');
});

app.listen( port, () => {console.log('server started'); } );