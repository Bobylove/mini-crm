var express = require('express');
var fs = require('fs');
var bodyparser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyparser());


app.post('/public', function(req, res){
	var post = req.body;
	var crmPath = __dirname + '/public/crm.json';

	fs.readFile(crmPath, 'utf8', function(err, data){
		
		var content = JSON.parse(data);
		var idLen = content.customers[content.customers.length-1].id;
		var nbID = idLen+1;
		

		content.customers.push({id:nbID,first_name:post.first_name, last_name:post.last_name,company:post.company,role:post.role,phone:post.phone,email:post.email,description:post.description});
		var jsonified = JSON.stringify(content);

		fs.writeFile(crmPath, jsonified, function(err){
			if(err) {
				alert("TRY AGAIN");
			}
		});
	});
	res.json({message:"Votre client a bien été ajouté", status:'ok'});
	res.send("GG WP");
});


app.listen(7000, function(){
	console.log(' go fast sur le port 7000 ! ')
});