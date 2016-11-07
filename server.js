var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(express.static(__dirname + '/'));
app.use(bodyparser());


app.get('/', function(req,res) {
var crmPath = __dirname + '/crm.json';


	res.send("Salut coquine ! ")

});


app.listen(7000, function(){
	console.log(' go fast sur le port 7000 ! ')
});