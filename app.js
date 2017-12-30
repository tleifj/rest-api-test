// Set up app
const express = require('express');
const app = express();

// Logging package for Node.js
const morgan = require('morgan');

// Include route-specifc code
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// Run everything through Morgan middleware
app.use(morgan('dev'));

// Routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Export for use in server.js
module.exports = app;
