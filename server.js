var   express = require('express')
	, bodyParser = require('body-parser')
	, port = 9000
	, setHeaders = require('./middleware/middleware').setHeaders
	, app = express();

app.use(bodyParser.json());
app.use(setHeaders);

require('./routes/todoRoutes.js')( app );

app.listen(port, function() {
	console.log('Listening on ' + port);
});