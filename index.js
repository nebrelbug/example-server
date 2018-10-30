let express = require('express');
let path = require('path');
let app = express();
app.set('view engine', 'squirrelly')
app.get('/', function (req, res) {
    res.render('index', {
        name: 'Title',
        name: 'Ben'
    })
})
let server = app.listen(8080, function () {
    console.log("listening to requests on port 8080");
});