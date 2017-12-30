const express = require('express');

// Sub-package of of express
const router = express.Router();

// Register routes
// GET 
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

// POST
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Orders were updated'
    });
});

// Single Orders
// GET 
router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    });
});

// DELETE 
router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted',
        orderId: req.params.orderId
    });
});

module.exports = router;