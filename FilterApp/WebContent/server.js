var express = require('express');
var app = express();
var path = require('path');

var port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));



//Set first route
app.get('/', function(req, res){
	res.render('index.ejs');
});

//listen for incoming requests on given port
app.listen(port, function(){
	console.log('SERVER RUNNING ON: ' + port);
})