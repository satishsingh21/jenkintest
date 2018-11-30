//importing express framework
const express = require('express');
 
var app = express();

// routes
app.get('/', function (req, res) {
 res.send('hello world');
});

// config
const PORT = process.env.PORT || 3000;
//listen to port 3000 by default
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
});
 
module.exports = app;