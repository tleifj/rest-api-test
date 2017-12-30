const express = require('express');

// Sub-package of of express
const router = express.Router();

// Register routes
// GET requests on /products
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'

    });
});
// POST requests on /products

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST request to /products'

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