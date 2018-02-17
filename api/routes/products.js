const express = require('express');
const mongoose = require('mongoose');

// Sub-package of of express
const router = express.Router();

const Product = require('../models/product')

// Register routes
// GET requests on /products
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'

    });
});
// POST requests on /products

router.post('/', (req, res, next) => {
    // Create a product model with data from request to store in database
    const product = new Product({
        _id: new mongoose.Types.ObjectId,
        // body property comes from bodyParser package
        name: req.body.name,
        price: req.body.price
    });

    // Save to database
    // Method from Mongoose
    product.save().then(result => {
       console.log(result); 
    })
    .catch(error => {
        console.log(error);
    });
    res.status(201).json({
        message: 'Handling POST request to /products',
        createdProduct: product

    });
});

// Single products
// GET
router.get('/:productId', (req, res, next) => {
        const id = req.params.productId;
        res.status(200).json({
            message: 'Handling POST request to /products',
            id: id
    
        });
});

// PATCH
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product',
    });
});

// DELETE
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product',
    });
});

module.exports = router;