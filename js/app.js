$(document).ready(function(){
	"use strict";



	var me = {

		html:null,
		id:null,
		json:'http://localhost:7000/crm.json',
		client:null,


		init: function(){
//Débute le script !
me.jsonAfficher();
},

bouttons: function(){
//Boutton pour afficher les informations clients du fichier json sur index.html 
//Boutton pour changer de page html et afficher les formulaire 
//Boutton pour récupéré les infos du formulaire et les ajouter dans le fichier " crm.json"
},
jsonRécupe: function(){
// Réccupéré les informations du fichier "crm.Json" avec une boucle for qui parcour l'objet et son tableau
},
jsonAfficher: function(){
	
// Affiche les infos du fichier "crm.json" dans la page index.html ( boucle ?)
$.get(me.json, function(data){
	me.html = data.customers
	for(var i = 0; i<me.html.length ; i++ ){
		$('#ficheClient').append('<div><span>ID'+me.html[i].id+'</span><div><span>Prénom :'+" "+me.html[i].first_name+'</span></div><div><span>Nom'+me.html[i].last_name+'</span></div><div><span>company'+me.html[i].company+'</span></div><div><span>Role'+me.html[i].role+'</span></div><div><span>phone'+me.html[i].phone+'</span></div><div><span>email'+me.html[i].mail+'</span></div><div><span>Description'+me.html[i].description+'</span></div></div><br>'); 
			// $('#list').append('<li>'+me.html[i].first_name+'</li>');

		}
	});
},

formulaireRécupe: function(){
//stocké les information du formulaire dans une variable "client"
},
formulaireToJson: function(){
// incrémenté dans le fichier " crm.json " les informations stocké du formulaire grace a la variable " client"
},

selectionéClients: function(){
// afficher les données du fichier " crm.json" dans un select  et les afficher sur la page index.html
},







}
me.init();
	});   // end of code