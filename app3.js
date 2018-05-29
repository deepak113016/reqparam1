var exp = require("express");
var app = exp();

app.use(exp.static(__dirname + "/public"));

var port = process.env.PORT || 4000;
app.get('/players/:lang/:name', function (req, res) {
    res.write("name= " + req.params.name);
    res.end("  lang= " + req.params.lang);
})

app.listen(port, function () {
    console.log("server is listening at port " + port);
})