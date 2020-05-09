const express = require('express');
const app = express();
require ('dotenv').config();

const Sequelize = require('sequelize')
const sequelize = new Sequelize ('music_sequelize', 'postgres','postgres', {
    host: 'localhost',
    dialect: 'postgres'
})

app.set('view engine', 'ejs');
app.set('views', 'views');



app.get('/ping', (req, res, next) => {
    res.send('pong');
})


app.listen(5000, () => {
    console.log('connected')
})