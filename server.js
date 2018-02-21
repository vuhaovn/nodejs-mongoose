var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://vuhaovn:vuhaovn@ds225608.mlab.com:25608/mytasklist_vuhaovn');

var db = mongoose.connection;

db.once('open', () => console.log('Server is connected'));

db.on('error', (err) => console.log(err));

app.listen(port, () => console.log(`Server is running on ${port}`));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index');
app.use('/', index);
