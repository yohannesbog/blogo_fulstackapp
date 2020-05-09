const express = require('express');
const app = express();




app.get('/ping', (req, res, next) => {
    res.render('login');
})


app.listen(5000, () => {
    console.log('connected')
})