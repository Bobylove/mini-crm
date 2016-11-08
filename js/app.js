$(document).ready(function(){
	"use strict";

	var me = {
		html:null,
		json:'http://localhost:7000/public/crm.json',

		init: function(){
			//Débute le script !
			me.jsonAfficher();
			// $('form').on('submit', this.formulaireRécupe.bind(this));
		},
		jsonAfficher: function(){
			// Affiche les infos du fichier "crm.json" dans la page index.html ( boucle ?)
			$.get(me.json, function(data){
				me.html = data.customers
				for(var i = 0; i<me.html.length ; i++ ){
					$('#ficheClient').append('<div><span>ID :'+me.html[i].id+'</span><div><span>Prénom :<span>'+me.html[i].first_name+'</span></div><div><span>Nom : '+me.html[i].last_name+'</span></div><div><span>company : '+me.html[i].company+'</span></div><div><span>Role : '+me.html[i].role+'</span></div><div><span>phone : '+me.html[i].phone+'</span></div><div><span>email : '+me.html[i].email+'</span></div><div><span>Description : '+me.html[i].description+'</span></div></div><br>'); 

				}
			});
		},
		// formulaireRécupe: function(event){
		// 	//stocké les information du formulaire
		// 	event.preventDefault();
		// 	var prenom = $("#prenom").val();
		// 	var nom = $("#nom").val();
		// 	var phone = $("#phone").val();
		// 	var mail = $("#mail").val();
		// 	var content = $("#content").val();
			// this.formulaireToJson({first_name:prenom, last_name:nom, phone:phone, email:mail, description:content});
		// },
		// formulaireToJson: function(data){
		// 	// ajouté dans le fichier " crm.json " 
		// 	$.ajax({
		// 		type:"POST",
		// 		url:$("form").attr("action"),
		// 		data: data,
		// 		success : this.success
		// 	})
		// },
		// success: function(){
		// 	alert("save client !");
		// },
		
	}
	me.init();
		});   // end of code