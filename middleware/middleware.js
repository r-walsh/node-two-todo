module.exports = {
	setHeaders: function( req, res, next ) {
		res.set({
			'Content-Type': 'application/json',
	      'Access-Control-Allow-Origin': '*',
	      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	      'X-XSS-Protection': '1; mode=block',
	      'X-Frame-Options': 'SAMEORIGIN',
	      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
		})
	}
	, addTimeStamp: function( req, res, next ) {
		req.body.timeStamp = new Date();

		next();
	}
}