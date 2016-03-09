var   ctrl = require('../controllers/todoCtrl')
	, addTimeStamp = require('../middleware/middleware').addTimeStamp;

module.exports = function( app ) {
	app.route('/api/todos')
		.get(ctrl.getTodos)
		.post(addTimeStamp, ctrl.postTodo);

	// app.route('/api/todos/:todoId')
		.delete(ctrl.deleteTodo);
}