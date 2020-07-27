const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/', (req, res, next) => {
    passport.authenticate('signup', (err, user, info) => { 
        console.log('success', err, user, info);
        if( err || !user) {
            res.status(404).json({ 
                message : info.message,
                user : req.user,
                err: err
            });
        } else {
            res.status(200).json({
                message : info ? info.message : 'User registration succesfull',
                user : req.user
            })
        }
       
    })(req, res, next);
});
  

module.exports = router;