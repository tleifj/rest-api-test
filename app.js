// Set up app
const express = require('express');
const app = express();

app.use((req, res, next) => {
	res.status(200).json({
		message: 'Status 200. It works!'
	});
});

module.exports = app;
