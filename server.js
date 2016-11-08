// lié les outils demander -----------------------|
var express = require('express'); // serveur      |
var fs = require('fs');           // file system  |
var bodyparser = require('body-parser'); //parse  |
// fin -------------------------------------------|

// variable d'exécution du server ---
var app = express();              //|
// fin ------------------------------ 

app.use(express.static(__dirname + '/'));
app.use(bodyparser());


app.post('/public', function(req, res){
	var post = req.body;
	var crmPath = __dirname + '/public/crm.json';

	fs.readFile(crmPath, 'utf8', function(err, data){
		
		var content = JSON.parse(data);

		// incrementation de "id" dans le fichier crm.json -------------
		var idLen = content.customers[content.customers.length-1].id;//|
		var nbID = idLen+1;                                          //|
		// Fin de l'incrementation -------------------------------------

		// posté les données dans le fichier crm.json------------------------------------------------------------------------------------------------------------------------------------------------
		content.customers.push({id:nbID,first_name:post.first_name, last_name:post.last_name,company:post.company,role:post.role,phone:post.phone,email:post.email,description:post.description});//|
		// fin du post-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		
		// transformé en sting la chaîne de caractere----
		var jsonified = JSON.stringify(content);	  //|
		// fin de la transformation --------------------- 

		// écrire dans le fichier crm.json ---------------
		fs.writeFile(crmPath, jsonified, function(err){//|
			if(err) {								   //|
				alert("TRY AGAIN");                    //|
			}										   //|
		}); 										   //|	
		// fin de l'écriture ----------------------------|
	});
	res.json({message:"Votre client a bien été ajouté", status:'ok'});
	res.send("GG WP");
});


app.listen(7000, function(){  // port utilisé pour le server
	console.log(' go fast sur le port 7000 ! ')  // verifier si il es bien fonctionel dans le terminal
});