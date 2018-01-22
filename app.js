// Set up app
const express = require('express');
const app = express();

// Packaage to parse URL-encoded and JSON bodies
const bodyParser = require('body-parser');

// Logging package for Node.js
const morgan = require('morgan');

// Include route-specifc code
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// Run everything through Morgan middleware for logging requests to console
app.use(morgan('dev'));
// Run everything through body parser
// Only parse simple URL-encoded bodies (not rich text)
app.use(bodyParser.urlencoded({extended: false}))
// Parse JSON bodies
app.use(bodyParser.json());

// Add headers to prevent Cross-Origin Resource errors
app.use((req, res, next) => {
	// Set a header and allow any origin to access the api
	res.header('Access-Control-Allow-Origin', '*');
	// Set what kind of headers are allowed
	res.header('Access-Control-Allow-Headers', '');
	
	// If a request is made to see the API options, specify the methods that are allowed
	if (req.method === OPTIONS) {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json();
	}
	next();
});


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
