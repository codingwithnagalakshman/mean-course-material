const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, user, info) => {

        if(err || !user) {
            res.status(404).json({
                message: 'something has gone wrong, Please try later'
            })
        }
        res.status(200).json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        });
    })(req, res, next)
})


module.exports = router;