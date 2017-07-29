var express = require('express'),
app = express(),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
util = require('util'),
mongoose = require('mongoose');
//config = require('./config');

app.path = path = require('path');
app.jsHandler = jsHandler = '';

mongoose.connect('mongodb://localhost/news', function(err,db){
    if (!err){
        console.log('Connected to /news!');
    } else{
        console.dir(err); //failed to connect
    }
});

// Common app config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	limit: '10mb',
	extended: true
}));
app.use(methodOverride());
app.use(cookieParser('lbajobs'));

app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname, '/public')));

var router = require('./routes/index');
app.use('/api', router);
var server = app.listen(4000, function () {
  console.log('Server is running on  ' + server.address().address + ':' + server.address().port);
});
module.exports = app;