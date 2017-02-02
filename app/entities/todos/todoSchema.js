const mongoose = require('mongoose');
const todoValidator = require('./todoValidator');

const Todo = new mongoose.Schema({
	date: { type: Date, default: Date.now },
	done: { type: Boolean, default: false },
	text: {
		type: String,
		default: '',
		validate: {
			validator: todoValidator.validate.bind(todoValidator),
			message: todoValidator.message
		}
	}
});

Todo.methods.getViewModel = function () {
	return {
		_id: this._id,
		date: this.date,
		done: this.done,
		text: this.text
	};
};

module.exports = mongoose.model('Todo', Todo);