const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');


router.post('/', (req, res, next) => {
    passport.authenticate('signin', (err, user, info) => {
        console.log('user signin', user);
        if(err || !user) {
            res.status(400).json({
                message: info.message,
                user: req.user,
                err: err
            })
        }
        req.login(user, { session : false }, (error) => {
            const token = jwt.sign({
                user
            }, keys.jwt.secret , { expiresIn: '1h' });
            res.status(200).json({token});
        })
    })(req, res, next);
})


module.exports = router;
