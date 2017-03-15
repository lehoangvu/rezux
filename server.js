if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

var express = require('express');
var app = express();
// app.get("/:playlistId/:songId.html", function (req, res) {
//   express.static(__dirname)
// });

app.use(
    "/", //the URL throught which you want to access to you static content
    express.static(__dirname) //where your static content is located in your filesystem
);

app.route('/:playlistId/:songId.html').get(function (req, res) {
	res.sendfile(__dirname + '/index.html');
});

app.route('/:playlistId/:songId').get(function (req, res) {
	res.sendfile(__dirname + '/index.html');
});

app.listen(3000); //the port you want to use
