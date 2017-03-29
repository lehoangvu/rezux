var express = require('express');
var app = express();
app.use(
    "/", //the URL throught which you want to access to you static content
    express.static(__dirname) //where your static content is located in your filesystem
);
app.route('/:playlistId').get(function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.route('/:playlistId/:songId').get(function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 5000); //the port you want to use
