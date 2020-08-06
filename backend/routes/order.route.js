const express = require('express');
const router = express.Router();
const passport = require('passport');
const Order = require('../models/order.model');


router.get('/', (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        Order.find({'user': user})
             .exec((err, data) => {
                res.status(200).json({
                    data
                })
        })
    })(req, res, next)
})


router.post('/', (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, user) => {
        if(err || !user) {
            res.status(404).json({
                message: 'something has gone wrong, Please try later'
            })
        }
          
        const order = new Order({
            user: user,
            items: req.body.cartItems,
            shipping_address: req.body.shippingAddress,
            payment: req.body.payment,
            total_amount: req.body.totalAmount
        });
            
        order.save().then( data => {
            res.status(200).json({
                success: true
            })
        }).catch( err => {
            res.status(500).json({
                success: false
            })
        });       
    })(req, res, next)
})


module.exports = router;