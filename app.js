var connect = require('connect');
var serveStatic = require('serve-static');
var morgan = require('morgan');
var port = process.env.PORT || 5000;

var app = connect();

app.use(morgan('dev'));
app.use(serveStatic('public'));

app.listen(port);
console.log('Node listening on port ' + port);
