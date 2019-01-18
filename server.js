
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist'));
app.listem(process.env.PORT || 8080);
