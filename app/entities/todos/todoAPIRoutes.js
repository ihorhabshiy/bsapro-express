const express = require('express');
const todo = express.Router();
const todoService = require('./todoService');

todo.get('/', (req, res, next) => {
	todoService.getAllTodos().then((todos) => {
		res.send(todos);
	}).catch((err) => {
		res.status(400).end();
	});
});

todo.post('/', (req, res, next) => {
	todoService.addTodo(req.body).then((todo) => {
		res.status(201).send(todo);
	}).catch((err) => {
		res.status(400).json(err);
	});
});

todo.get('/:id', (req, res, next) => {
	todoService.getTodoById(req.params.id).then((todo) => {
		res.send(todo);
	}).catch((err) => {
		res.status(400).end();
	});
});

todo.put('/:id', (req, res, next) => {
	todoService.editTodo(req.params.id, req.body)
	.then((todo) => {
		return todoService.getTodoById(req.params.id);
	}).then((todo) => {
		res.send(todo);
	}).catch((err) => {
		res.status(400).json(err);
	});
});

todo.delete('/:id', (req, res, next) => {
	todoService.deleteTodo(req.params.id).then(() => {
		res.status(200).end();
	}).catch((err) => {
		res.status(400).end();
	});
});

module.exports = todo;
