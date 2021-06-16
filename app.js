const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



//routes
const route = require('./route');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs')

app.use(route)

const server = http.createServer(app);
app.listen(8080);


