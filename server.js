const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const productsRouter = require('./backend/routes/products.route');
const contactUsRouter = require('./backend/routes/contactus.route');
const signupRoute = require('./backend/routes/signup.route');
const signinRoute = require('./backend/routes/signin.route');

const keys = require('./backend/config/keys');
require('./backend/setup/passport-local-setup');

const app = express();


mongoose.connect(keys.mongo.dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then( () => {console.log('Connection to Mongo is successful');})
        .catch( err => {console.log('Connection error', err);})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
   );
   next();
});
app.use(passport.initialize());


app.use('/api/products', productsRouter);
app.use('/api/contactus', contactUsRouter);
app.use('/api/signup', signupRoute);
app.use('/api/signin', signinRoute);


app.listen(3000);