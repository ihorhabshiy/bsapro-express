const todos = require('../entities/todos/todoViewRoutes');

const initializeRoutes = (app) => {
	app.use('/', todos);
	app.use('/todo', todos);
}

module.exports = initializeRoutes;