var express = require('express')
const bodyPraser = require('body-parser')
var app = express()
app.use(bodyPraser.json())

app.get('/', function(req, res){
    res.send("Working")
})

app.listen(9000)