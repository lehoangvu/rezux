var http       = require('http');
var express = require('express');
var app = express();

// set up a route to redirect http to https
app.all('*',function(req,res, next){  
    if (/^http$/.test(req.protocol) && process.env.APP_ENV && process.env.APP_ENV === 'production') {
        return res.redirect('https://' + req.headers.host + req.url)
    } else {
        return next();
    }
});

app.use(
    "/", //the URL throught which you want to access to you static content
    express.static(__dirname) //where your static content is located in your filesystem
);
app.route('/auth').get(function (req, res) {
	res.sendfile(__dirname + '/auth.html');
});
// app.route('/:playlistId').get(function (req, res) {
//     res.sendfile(__dirname + '/index.html');
// });

// app.route('/:playlistId/:songId').get(function (req, res) {
//     res.sendfile(__dirname + '/index.html');
// });


// app.listen(process.env.PORT || 5000); //the port you want to use
http.createServer(app).listen(process.env.PORT || 5000).on('listening', function() {
  return console.log("HTTP to HTTPS redirect app launched.");
});