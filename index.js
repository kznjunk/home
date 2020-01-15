var express = require('express')
var app = express()

app
    .use(express.static('__dirname' + '/public'), () => {
        console.log('kib was here')
    })
    .get('/f.png', function (req, res) {
        res.status(204)
    })
