const Product = require('../models/product.model');
const config = require('../config/database');

const mongoose = require('mongoose');

const uri = `mongodb+srv://${config.mongo_username}:${config.mongo_password}@cluster0-pzufn.gcp.mongodb.net/${config.mongo_database}?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then( () => {console.log('Connection to Mongo is successful');})
        .catch( err => {console.log('Connection error', err);})

const productData = [
    new Product({productId: 1, title: 'Apple XR (64GB Black)', price: 700}),
    new Product({productId: 2, title: 'Apple XR (64GB Red)', price:729}),
    new Product({productId: 3, title: 'Apple XR (64GB Yellow)', price:729}),
    new Product({productId: 4, title: 'Apple 11 (64GB Black)', price:729}),
    new Product({productId: 5, title: 'Nokia 4 MB - Black', price:19.99}),
    new Product({productId: 6, title: 'Pixel 4 (128GB Black)', price:99.99}),
    new Product({productId: 7, title: 'Samsung A10 - Black', price:69.89}),
    new Product({productId: 8, title: 'Samsung Galaxy S9', price:100}),
    new Product({productId: 9, title: 'Iphone 8', price:259.99}),
    new Product({productId: 10,title: 'Samsung Galaxy S10+', price:250}),
    new Product({productId: 11,title: 'Galaxy S10e', price:399.99}),
    new Product({productId: 12,title: 'Motorola Moto G', price:199}),
    new Product({productId: 13,title: 'Motorola Moto X', price:159}),
    new Product({productId: 14,title: 'Sony Compact', price:699}),
    new Product({productId: 15,title: 'Sony Compact XZ', price:599}),
    new Product({productId: 16,title: 'Tutu Dress', price:5.99}),
    new Product({productId: 17,title: 'Princes dress for girls', price:9.99}),
    new Product({productId: 18,title: 'Girls wine party dress', price:7.99}),
    new Product({productId: 19,title: 'Girls Kids formal wear', price:4.99}),
    new Product({productId: 20,title: 'Kids formal wear', price:15.99}),
    new Product({productId: 21,title: 'Girls Mesh Causal', price:6.59}),
    new Product({productId: 22,title: 'Vintage Style', price:5.99}),
    new Product({productId: 23,title: 'Prince Flower', price:99.99}),
    new Product({productId: 24,title: 'Party Dress', price:18.99}),
    new Product({productId: 25,title: 'Princes', price:13.55}),
    new Product({productId: 26,title: 'Harga Bibicola', price:13.99}),
    new Product({productId: 27,title: 'Prom Dress', price:19.99}),
    new Product({productId: 28,title: 'Flower Dress', price:23.49}),
    new Product({productId: 29,title: 'Rose Dress', price:55.29}),
    new Product({productId: 30,title: 'White Dress', price:4.89}),
    new Product({productId: 31,title: 'Carrot', price:0.30}),
    new Product({productId: 32,title: 'Cabbage', price:2.99}),
    new Product({productId: 33,title: 'Tomato', price:0.75}),
    new Product({productId: 34,title: 'Cauliflower', price:0.89}),
    new Product({productId: 35,title: 'Radish ', price:1.49}),
    new Product({productId: 36,title: 'Aubergine', price:0.99}),
    new Product({productId: 37,title: 'Capsicum', price:1}),
    new Product({productId: 38,title: 'Broccolli', price:2.25}),
    new Product({productId: 39,title: 'Cucumber', price:1.50}),
    new Product({productId: 40,title: 'Corn', price:1.25}),
    new Product({productId: 41,title: 'Banana', price:0.50}),
    new Product({productId: 42,title: 'Watermelon', price:4.00}),
    new Product({productId: 43,title: 'PineApple', price:2.50}),
    new Product({productId: 44,title: 'Straberry', price:3.00}),
    new Product({productId: 45,title: 'Potatos', price:2.00})
];

let count = 0;
productData.forEach(product => {
    product.save(() => {
        count++;
        console.log('record saved', product.productId);
        if(count == productData.length) {
            closeConnection();
        }
    });
    
});

function closeConnection() {
    mongoose.disconnect();
}