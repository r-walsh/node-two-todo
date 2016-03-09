var todos = [
    {
          do: 'Write a mini project'
        , id: 1
    }
    , {
          do: 'remember req params and queries'
        , id: 2
    }
    , {
          do: 'im running out of ideas'
        , id: 3
    }
];

module.exports = {
	getTodos: function( req, res ) {
		res.send(todos);
	}
	, postTodo: function( req, res ) {
		todos.push(req.body);
		res.send(todos);
	}
	, deleteTodo: function( req, res ) {
		for ( var i = 0; i < todos.length; i++ ) {
			if (todos[i] === parseInt(req.query.todoId)) {
				todos.splice(i, 1);
			}
		}
		res.send(todos);
	}
}