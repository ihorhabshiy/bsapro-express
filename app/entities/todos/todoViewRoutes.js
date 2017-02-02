const express = require('express');
const todo = express.Router();

const todoService = require('./todoService');

todo.get('/', (req, res, next) => {
	res.render('todos');
});

module.exports = todo;
