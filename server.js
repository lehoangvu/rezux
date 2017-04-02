var express = require('express');
var app = express();
function requireHTTPS(req, res, next) {
    if (!req.get('x-arr-ssl') && process.env.APP_ENV && process.env.APP_ENV === 'production') {
        return res.redirect('https://' +req.get('host') + req.url);
    }
    next();
}
 
app.use(requireHTTPS);
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


app.listen(process.env.PORT || 5000); //the port you want to use
