var exp = require("express");
const favicon = require('express-favicon');

var app = exp();
//var port = process.env.PORT || 4000;

app.use(favicon(__dirname + '/public/favicon.png'));

app.set('port', (process.env.PORT || 5000)); 
app.get('/',function(req,res){
    res.send("Hello World ");
})
app.get('/players', function (req, res) {
    var query = req.query;
    console.log(" query value = " + JSON.stringify(query));
    res.write("name= "+ query.name);
    res.end("  lang= "+ query.lang);
})

app.listen(app.get('port'), function() { 
     	console.log('Node app is running on port', app.get('port'));
})    


//app.listen(port, function () {
  //  console.log("server is listening at port " + port);
//})