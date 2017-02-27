/* jshint node: true */
/* global require */
'use strict';

var express = require('express');
var ejs = require('ejs');
var cfenv = require('cfenv');
var path = require('path');
var bodyParser = require('body-parser');
var useragent = require('express-useragent');

require('dotenv').config({ silent: true });

var app = express();
var appEnv = cfenv.getAppEnv();

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

//middlewares
app.use(express.static(path.join(__dirname, 'public'), { fallthrough: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(useragent.express());

app.use('/', require('./controllers/controller-main'));
app.use('/convert', require('./controllers/controller-text-speech'));

// just trying stuff. comment out for prod.
// app.use('/try', require('./controllers/try'));

var port = appEnv.port || 3000;

if (!module.parent) {
    app.listen(port, () => {
        console.log('Server starting on ' + port);
    });
}

module.exports = app;