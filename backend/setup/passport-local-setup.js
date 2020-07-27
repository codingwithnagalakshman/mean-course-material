const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

passport.use('signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false,
        passReqToCallback: true
    }, (req, email, password, done) => {
        User.findOne({email: email}).then( user => {
            if (user) {
                return done(null, false, { message: 'Email Address already registered' });
            }
            bcrypt.hash(password, 10, (err, hash) => {
                const newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: email,
                    password: hash
                });
                newUser.save().then( createdUser => {
                    return done(null, createdUser);
                }).catch( err => {
                    return done(err, false, {message: 'failed to registered. Please try again'});
                })
            })
        }).catch( err => {
            return done(err, false, {message: 'failed to retrieve User info from Mongo'});
        })
    })
)

passport.use('signin', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false,
    }, (email, password, done) => {
        User.findOne({email: email}).then( (user) => {
            if( user ) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if(result) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: 'authentication failed'});
                    }
                })
            } else {
                return done(null, false, { message: 'Email is not registered with us. Please register.'})
            }
        }).catch( err => {
            return done(err, false, { message: 'Error whiel connecting to DB'})
        })
    })
)