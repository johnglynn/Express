//STARTING A SERVER WITH NODE

// var http = require('http');  //importing http module from node


// var myServer = http.createServer(function(request, response)
// {
// 	response.writeHead(200, {"Content-Type" : "text/html"});
// 	response.write('<h1>Roux Meetups</h1>');
// 	response.end();
// });


// myServer.listen(3000);
// console.log('Go to http://localhost:3000 on your browser')

//STARTING A SERVER WITH EXPRESS

var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('<h1>Roux Academy Meetups</h1>');
});

var server = app.listen(3000, function() {
	console.log('Listening on port 3000');
});

