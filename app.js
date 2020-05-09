const express = require('express');
const app = express();
require ('dotenv').config();





app.get('/ping', (req, res, next) => {
    res.render('login');
})


app.listen(5000, () => {
    console.log('connected')
})