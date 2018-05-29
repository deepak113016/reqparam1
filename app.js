var exp = require("express");
var app = exp();

var port = process.env.PORT || 4000;
app.get('/players', function (req, res) {
    var query = req.query;
    console.log(" query value = " + JSON.stringify(query));
    res.write("name= "+ query.name);
    res.end("  lang= "+ query.lang);
})

app.listen(port, function () {
    console.log("server is listening at port " + port);
})