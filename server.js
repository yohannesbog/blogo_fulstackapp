const express = require('express');
const app = express();
const bodyParsser = require('body-parser')

// const passport = require('passport');
// const githubStrategy = require('passport-github').Strategy;


// EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static("public"));

app.use(bodyParsser.json())
app.use(bodyParsser.urlencoded())

//Express and passport session
const session = require('express-session')
app.use(session({
    secret: 'abc123',
    resave: false,
    saveUninitialized: false
}));


passport.use(new githubStrategy({
    clientID: '71616a38e81e658e52d3',
    clientSecret: 'a20bbae9c4cf0fa9f2381c19b00a105e2edacb0e',
    callbackURL: 'http://localhost:5000/auth/github/callback'
},

    function (accessToken, refreshTocken, profile, done) {
        return done(null, profile);
    }
));


app.use(passport.initialize());
app.use(passport.session());  //should put alwys after pass.initialise 

passport.serializeUser(function (user, done) {
    done(null, user);
})

passport.deserializeUser(function (user, done) {
    done(null, user);
})

/////above code is necessary setup

//  Login
app.get('/auth/github', passport.authenticate('github'));


//github callback url
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/fail' }),
    function (req, res) {
         res.redirect('/Dashboard')
    }
);

//verify authentication

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/login')
}

// function logRequest(req, res, next){
//     console.log('another request');
//         next();
// }


// app.get('/dashboard', ensureAuthenticated, logRequest, (req, res, next) => {
//     res.send('dashboard')
// })

// //Logout
// app.get('/logout', function (req, res, next) {
//     console.log('loging out')
//     req.logout()
//     res.redirect('/ping');
// })


// app.get('/ping', (req, res, next) => {
//     res.render('login');
// })

// app.get('/login', (req, res) => {
//    res.render('login')
// })

// app.post('/login', (req, res) => {
// console.log(req.body)
// db.findOne({where: {username:req.body.username}})
// .then(function (user) {
//     user
// })
//  res.redirect('/dashboard')
//  })

app.listen(5000, () => {
    console.log('connected')
})