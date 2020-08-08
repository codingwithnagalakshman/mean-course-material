const express = require('express');
const router = express.Router();
const Country = require('../models/country.model');

router.get('/country', (req, res, next) => {
    Country.find().then( (countries) => {
        res.status(200).json(countries);
    }).catch( err => {
        res.status(500).json({
            message: 'unable to fetch the countries list'
        })
    })
})


module.exports = router;