const express = require('express');
const router = express.Router();
const passport = require('passport');

const ContactUs = require('../models/contactus.model');


router.post('/', (req, res) => {
   const contactus = new ContactUs(req.body);
   contactus.save().then(() => {
       res.send(res);
   }).catch( err => {
    res.send(err);
   })
})

router.get('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    ContactUs.find().then( ( data ) => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
})

module.exports = router;