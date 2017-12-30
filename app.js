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

// Error Handling
app.use((req, res, next) => {
	// Error object provided by Node.js
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

// Export for use in server.js
module.exports = app;
