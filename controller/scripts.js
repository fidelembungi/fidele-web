function connecter() {
	location.href = "./connect.html";
}

// fonction des messages

function commentaires() {
	var nom = $("#nom").val();
	var email = $("#email").val();
	var message = $("#commentaire").val();

	if (nom != "") {
		if (message != "") {

			$.ajax({

				url: "./model/scripts.php",
				type: "POST",
				data: {
					"ent": "commentaires_ajout",
					"nom": nom,
					"email": email,
					"commentaire": message
				},

				error: function (data) {
					console.log(data);
				},

				success: function (data) {
					
					var data2 = JSON.parse(data);

					if (data2[0] != 0) {

						$("#nom").val("");
						$("#email").val("");
						$("#telephone").val("");
						$("#commentaire").val("");

						var string = '';

						string +=
							'<div class="alert alert-success bg-success text-light alert-dismissible">' +
							"commentaire envoyé avec succès" +
							'<button type="button" class="btn btn-close btn-transparent text-light border light" data-bs-dismiss="alert"' +
							'aria-label="close">' +

							'</button>' +
							'</div>';
						$("#alert").empty().append(string);

					}
				}
			});

		} else {

			alert("veuillez ajouter un commentaire avant d'envoyer");
		}
	} else {
		alert("Veuillez entre un nom valide");
	}
}
// fonction des messages

function messages() {
	var nom = $("#nom").val();
	var email = $("#email").val();
	var tel = $("#telephone").val();
	var message = $("#message").val();

	if (nom != "") {
		if (tel != "") {
			if (message != "") {

				$.ajax({

					url: "./model/scripts.php",
					type: "POST",
					data: {
						"ent": "messages_ajout",
						"nom": nom,
						"email": email,
						"tel": tel,
						"message": message
					},

					error: function (data) {
						console.log(data);
					},

					success: function (data) {

						var data2 = JSON.parse(data);

						if (data2[0] != 0) {

							$("#nom").val("");
							$("#email").val("");
							$("#telephone").val("");
							$("#message").val("");

							var string = '';

							string +=
								'<div class="alert alert-success bg-success text-light alert-dismissible">' +
								"message envoyé avec succès" +
								'<button type="button" class="btn btn-close btn-transparent text-light border light" data-bs-dismiss="alert"' +
								'aria-label="close">' +

								'</button>' +
								'</div>';
							$("#alert").empty().append(string);

						}
					}
				});

			} else {

				alert("veuillez ajouter un message avant d'envoyer");
			}
		} else {
			alert("Veuillez entrez votre numéro de téléphone");
		}
	} else {
		alert("Veuillez entre un nom valide");
	}
}

// fonction focus

function foc() {
	$("#username").focus();
}

// fonction de la connexion au site

function connection() {
	var nom_utilisateur = '';
	var mot_de_passe = '';
	nom_utilisateur = $('#username').val();
	mot_de_passe = $('#mdp').val();

	// condition pour tester le recupération des données dans les élément html
	if (nom_utilisateur != '' && mot_de_passe != '') {
		$.ajax({
			url: "./model/scripts.php",
			type: "POST",
			data: {
				'ent': 'connexion',
				'username': nom_utilisateur,
				'mdp': mot_de_passe
			},
			error: function (data) {
				console.log(data)
			},
			success: function (data) {
				data = JSON.parse(data);
				if (data[0] != 0) {

					$('#username').val('');
					$('#mdp').val('');
					$('#username').focus();

					sessionStorage.setItem('nom', data[1]);
					sessionStorage.setItem('statut', data[2]);
					sessionStorage.setItem('img', data[3]);
					location.href = "./index.html";

				} else {
					alert("Nom d'utilisateur ou Mot de passe incorrect");
					$('#username').val('');
					$('#mdp').val('');
					$('#username').focus();
				}
			}
		});
	} else {
		alert('Remplissez tout les champs');
		$('#username').val('');
		$('#mdp').val('');
		$('#username').focus();
	}
}

function selection(id) {
	$.ajax({
		url: "./model/scripts.php",
		type: "POST",
		data: {
			'ent': 'selectionner',
			"id": id
		},
		error: function (data) {
			console.log(data);
		},
		success: function (data) {
			var data2 = JSON.parse(data);
			if (data2 != 0) {
				$('#search').val(data2[1]);
				$('#Grand_titre').val(data2[2]);
				$('#Petit_titre').val(data2[3]);
				$('#Titre_du_span').val(data2[4]);
				$('#details').val(data2[5]);
				$('#service_img').shapeImageThreshold = "./media/services/" + data2[6];

				var selected = "Service selectionné";
				alert(selected);

			}
		}
	});
}

function selection1(id) {
	$.ajax({
		url: "./model/scripts.php",
		type: "POST",
		data: {
			'ent': 'selectionner1',
			"id": id
		},
		error: function (data) {
			console.log(data);
		},
		success: function (data) {
			var data2 = JSON.parse(data);
			if (data2 != 0) {

				$('#search1').val(data2[1]);
				$('#titre_p').val(data2[2]);
				$('#details_p').val(data2[3]);

				var selected = "Paragraphe séléctionnée";
				alert(selected);

			}
		}
	});
}

function selection2(id) {
	$.ajax({
		url: "./model/scripts.php",
		type: "POST",
		data: {
			'ent': 'selectionner2',
			"id": id
		},
		error: function (data) {
			console.log(data);
		},
		success: function (data) {
			var data2 = JSON.parse(data);
			if (data2 != 0) {

				$('#search2').val(data2[1]);
				$('#titre_card').val(data2[2]);
				$('#details_card').val(data2[3]);

				var selected = "Card séléctionné";
				alert(selected);

			}
		}
	});
}

function deleted1() {
	var id = $("#search1").val();
	var titre = $("#titre_p").val();
	if (confirm("Voulez-vous supprimer " + titre)) {
		$.ajax({
			url: "./model/scripts.php",
			type: "POST",
			data: {
				"ent": "supprime",
				"id": id
			},
			error: function (data) {
				console.log(data);
			},
			success: function (data) {
				var data2 = JSON.parse(data);
				if (data2 != 0) {

					alert(titre + "Supprimé avec succès");
					actualiser1();

				}
			}
		});
	}

}

function suppressions(id) {
	if (confirm("Voulez-vous supprimer ce commentaire")) {
		
		$.ajax({
			url: "./model/scripts.php",
			type: "POST",
			data: {
				"ent": "suppressions",
				"id": id
			},
			error: function (data) {
				console.log(data);
			},
			success: function (data) {

				var data2 = JSON.parse(data);
				if (data2 != 0) {

					alert("message Supprimé avec succès");
					table_commentaires();
				}
			}
		});
	}

}
function suppression(id) {
	if (confirm("Voulez-vous supprimer ce message")) {
		
		$.ajax({
			url: "./model/scripts.php",
			type: "POST",
			data: {
				"ent": "suppression",
				"id": id
			},
			error: function (data) {
				console.log(data);
			},
			success: function (data) {

				
				var data2 = JSON.parse(data);
				if (data2 != 0) {

					alert("message Supprimé avec succès");
					table_messages();
				}
			}
		});
	}

}
function deleted2() {
	var id = $("#search2").val();
	var titre = $("#titre_card").val();
	if (confirm("Voulez-vous supprimer " + titre)) {
		$.ajax({
			url: "./model/scripts.php",
			type: "POST",
			data: {
				"ent": "supprimer",
				"id": id
			},
			error: function (data) {
				console.log(data);
			},
			success: function (data) {

				var data2 = JSON.parse(data);
				if (data2 != 0) {

					alert(titre + "Supprimé avec succès");
					actualiser2();

				}
			}
		});
	}

}

function deleted() {
	var id = $("#search").val();
	var titre = $("#Grand_titre").val();
	if (confirm("Voulez-vous supprimer " + titre)) {
		$.ajax({
			url: "./model/scripts.php",
			type: "POST",
			data: {
				"ent": "suppr",
				"id": id
			},
			error: function (data) {
				console.log(data);
			},
			success: function (data) {
				var data2 = JSON.parse(data);
				if (data2 != 0) {

					alert(titre + "Supprimé avec succès");
					$("#service_img").val("");
					$("#search").val("");
					$("#Grand_titre").val("");
					$("#Petit_titre").val("");
					$("#Titre_du_span").val("");
					$("#details").val("");
					table_services();
					$("#service_img").focus();

				}
			}
		});
	}

}

function actualiser2() {
	$("#search2").val("");
	$("#card_img").val("");
	$("#titre_card").val("");
	$("#details_card").val("");
	table_cards();
}

function actualiser1() {
	$("#search1").val("");
	$("#titre_p").val("");
	$("#details_p").val("");
	$("#titre_p").focus();
	table_paragraphes();
}

function actualiser() {
	$("#service_img").val("");
	$("#search").val("");
	$("#Grand_titre").val("");
	$("#Petit_titre").val("");
	$("#Titre_du_span").val("");
	$("#details").val("");
	table_services();
}

function table_commentaires() {

	$.ajax({
		url: "./model/scripts.php",
		type: "POST",
		data: {
			'ent': 'table_commentaires'
		},
		error: function (data) {
			console.log(data)
		},
		success: function (data) {

			var result = $.parseJSON(data);

			var i = 0;
			var string = '';

			$.each(result, function (key, value) {
				i += 1;
				string +=
					'<tr class="lead" style="cursor: pointer" id="' + value["id"] + '" onclick="suppressions(this.id);">' +
					'<td class="text-justify" px-2>' + value["id"] + '</td>' +
					'<td class="text-justify" px-2>' + value["noms"] + '</td>' +
					'<td class="text-justify" px-2>' + value["email"] + '</td>' +
					'<td class="text-justify" px-2>' + value["commentaires"] + '</td>' +
					'<td class="text-justify" px-2>' + value["date_creee"] + '</td>' +
					'</tr>'

			});
			$("#table_commentaires").empty().append(string);
		}
	});


}
function table_messages() {

	$.ajax({
		url: "./model/scripts.php",
		type: "POST",
		data: {
			'ent': 'table_messages'
		},
		error: function (data) {
			console.log(data)
		},
		success: function (data) {

			var result = $.parseJSON(data);

			var i = 0;
			var string = '';

			$.each(result, function (key, value) {
				i += 1;
				string +=
					'<tr class="lead" style="cursor: pointer" id="' + value["id"] + '" onclick="suppression(this.id);">' +
					'<td class="text-justify" px-2>' + value["id"] + '</td>' +
					'<td class="text-justify" px-2>' + value["noms"] + '</td>' +
					'<td class="text-justify" px-2>' + value["email"] + '</td>' +
					'<td class="text-justify" px-2>' + value["telephone"] + '</td>' +
					'<td class="text-justify" px-2>' + value["messages"] + '</td>' +
					'<td class="text-justify" px-2>' + value["date_creee"] + '</td>' +
					'</tr>'

			});
			$("#table_messages").empty().append(string);
		}
	});


}
function table_paragraphes() {

	$.ajax({
		url: "./model/scripts.php",
		type: "POST",
		data: {
			'ent': 'table_paragraphes'
		},
		error: function (data) {
			console.log(data)
		},
		success: function (data) {

			var result = $.parseJSON(data);

			var i = 0;
			var string = '';

			$.each(result, function (key, value) {
				i += 1;
				string +=
					'<tr class="lead" style="cursor: pointer" id="' + value["id"] + '" onclick="selection1(this.id);">' +
					'<td class="text-justify" px-2>' + value["id"] + '</td>' +
					'<td class="text-justify" px-2>' + value["titre"] + '</td>' +
					'<td class="text-justify" px-2>' + value["details"] + '</td>' +
					'<td class="text-justify" px-2>' + value["date_creee"] + '</td>' +
					'</tr>'

			});
			$("#table_paragraphes").empty().append(string);
		}
	});


}

function table_services() {

	$.ajax({
		url: "./model/scripts.php",
		type: "POST",
		data: {
			'ent': 'table_services'
		},
		error: function (data) {
			console.log(data)
		},
		success: function (data) {

			var result = $.parseJSON(data);

			var i = 0;
			var string = '';

			$.each(result, function (key, value) {
				i += 1;
				string +=
					'<tr class="lead" style="cursor: pointer" id="' + value["id"] + '" onclick="selection(this.id);">' +
					'<td class="text-justify" px-2>' + value["id"] + '</td>' +
					'<td class="text-justify" px-2>' + value["grand_titre"] + '</td>' +
					'<td class="text-justify" px-2>' + value["petit_titre"] + '</td>' +
					'<td class="text-justify" px-2>' + value["span"] + '</td>' +
					'<td class="text-justify" px-2>' + value["images"] + '</td>' +
					'</tr>'

			});
			$("#table_services").empty().append(string);
		}
	});


}

function table_cards() {

	$.ajax({
		url: "./model/scripts.php",
		type: "POST",
		data: {
			'ent': 'table_cards'
		},
		error: function (data) {
			console.log(data)
		},
		success: function (data) {

			var result = $.parseJSON(data);

			var i = 0;
			var string = '';

			$.each(result, function (key, value) {
				i += 1;
				string +=
					'<tr class="lead" style="cursor: pointer" id="' + value["id"] + '" onclick="selection2(this.id);">' +
					'<td class="text-justify  px-2">' + value["id"] + '</td>' +
					'<td class="text-justify px-2">' + value["titre"] + '</td>' +
					'<td class="text-justify  px-2">' + value["images"] + '</td>' +
					'<td class="text-justify px-2">' + value["details"] + '</td>' +
					'<td class="text-justify  px-2">' + value["date_creee"] + '</td>' +
					'</tr>'

			});
			$("#table_cards").empty().append(string);
		}
	});


}

function Afficher_commentaires() {

	$.ajax({
		url: "./model/scripts.php",
		type: "POST",
		data: {
			'ent': 'Afficher_commentaires'
		},
		error: function (data) {
			console.log(data)
		},
		success: function (data) {
			var result = $.parseJSON(data);
			var i = 0;
			var string = '';
			$.each(result, function (key, value) {
				i += 1;
				string +=

					'<div class="col-xs-12 col-sm-11 col-md-4 col-lg-4">' +
					'<h5 class="h3">' +
					value["noms"] +
					'</h5>' +
					'<h6 class="h6">' +
					value["email"] +
					'</h6>' +
					'<p class="lead text-justify">' +
					value["commentaires"] +
					'</p>' +
					'<span class="span">' +
					'Poster le :' +' '+ value["date"] +
					'</span>' +
					'</p>' +
					'<span class="span">' +
					'A :' +' '+ value["heure"] +
					'</span>' +
					'</div>'

			});
			$("#commentaires").empty().append(string);
		}
	});
}
function Afficher_messages() {

	$.ajax({
		url: "./model/scripts.php",
		type: "POST",
		data: {
			'ent': 'Afficher_messages'
		},
		error: function (data) {
			console.log(data)
		},
		success: function (data) {
			
			var result = $.parseJSON(data);
			var i = 0;
			var string = '';
			$.each(result, function (key, value) {
				i += 1;
				string +=

					'<div class="col-xs-12 col-sm-11 col-md-4 col-lg-4">' +
					'<h5 class="h3">' +
					value["noms"] +
					'</h5>' +
					'<h6 class="h4">' +
					value["email"] +
					'</h6>' +
					'<h6 class="h5">' +
					value["telephone"] +
					'</h6>' +
					'<p class="lead text-justify">' +
					value["messages"] +
					'</p>' +
					'<span class="span">' +
					'Poster le :' +' '+ value["date"] +
					'</span>' +
					'</p>' +
					'<span class="span">' +
					'A :' +' '+ value["heure"] +
					'</span>' +
					'</div>'

			});
			$("#messages").empty().append(string);
		}
	});
}

function Afficher_paragraphes() {

	$.ajax({
		url: "./model/scripts.php",
		type: "POST",
		data: {
			'ent': 'Afficher_paragraphes'
		},
		error: function (data) {
			console.log(data)
		},
		success: function (data) {
			var result = $.parseJSON(data);
			var i = 0;
			var string = '';
			$.each(result, function (key, value) {
				i += 1;
				string +=

					'<div class="col-xs-12 col-sm-8 col-md-6 col-lg-5">' +
					'<h2 class="py-2">' +
					value["titre"] +
					'</h2>' +
					'<p class="text-justify lead">' +
					value["details"] +
					'</p>' +
					'</div>'

			});
			$("#paragraphes").empty().append(string);
		}
	});
}

function Afficher_services() {

	$.ajax({
		url: "./model/scripts.php",
		type: "POST",
		data: {
			'ent': 'Afficher_services'
		},
		error: function (data) {
			console.log(data)
		},
		success: function (data) {
			
			var result = $.parseJSON(data);
			var i = 0;
			var string = '';
			$.each(result, function (key, value) {
				i += 1;
				string +=
					'<div class="py-2">' +
					'<h2 class="py-1">' + value["grand_titre"] + '</h2>' +
					'</div>' +
					'<div class="col p-2 py-2">' +
					'<div id="' + value["id"] + '" class="card border border-success bg-transparent p-0 m-0 border">' +
					'<div class="card-header bg-success bg-opacity-75">' +
					'<span class="lead gras text-light">' +
					value["petit_titre"] +
					'</span>' +
					'</div>' +
					'<div class="card-body row d-flex justify-content-around align-items-center">' +
					'<div class="col-xs-12 col-sm-10 col-md-9 col-lg-3">' +
					'<img src="./media/services/' + value["images"] + '" alt="' + value["images"] + '" class="img-fluid rounded">' +
					'</div>' +
					'<div class="col-xs-12 col-sm-12 col-md-9 col-lg-8 py-3">' +
					'<span class="my-2 tetxt-center span" style="font-size: 1.4em;">' +
					'<b>' +
					value["span"] +
					'</b>' +
					'</span>' +
					'<p class="text-justify pt-3" style="font-size: 1.2em;">' +
					value["details"] +
					'</p>' +
					'</div>' +
					'<div class="d-none col-xs-12 col-sm-12 col-md-2 col-lg-2 d-flex justify-content-around">' +
					'<button class="btn btn-primary">' +
					'<span class="lead gras">' +
					'En savoir' +
					'</span>' +
					'<i class="fa fa-plus mx-2">' +
					'</i>' +
					'</button>' +
					'<button class="btn btn-danger p-2 delete d-none" id="delete" type="button">' +
					'<i class="fa fa-close "> </i>' +
					'</button>' +
					'</div>' +
					'<div>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>'

			});
			$("#services").empty().append(string);
		}
	});
}

function Afficher_cards() {

	$.ajax({
		url: "./model/scripts.php",
		type: "POST",
		data: {
			'ent': 'Afficher_cards'
		},
		error: function (data) {
			console.log(data)
		},
		success: function (data) {
			var result = $.parseJSON(data);
			var i = 0;
			var string = '';
			$.each(result, function (key, value) {
				i += 1;
				string +=

					'<div class="col-xs-12 col-sm-10 col-md-4 col-lg-4 p-4 text-center">' +
					'<img src="./media/card_acceuil/Card_img_accueil_' + value["images"] + '" class="img-fluid rounded-5 p-3" alt="' + value["titre"] + '">' +
					'<h3>' +
					value["titre"] +
					'</h3>' +
					'<p class="text-justify lead ">' +
					value["details"] +
					'</p>' +
					'<button id="' + value["id"] + '" class="m-3 btn btn-primary" type="button" onclick="savoir()";>' +
					'<span class="lead mx-2">' +
					'En savoir ' +
					'</span>' +
					'<i class="fa fa-plus"> </i>' +
					'</button>' +
					'</div>'

			});
			$("#card_accueil").empty().append(string);
		}
	});
}

function savoir() {
	location.href = "./services.html";
}

function validation() {

	if (!sessionStorage.getItem("nom") || sessionStorage.getItem("nom") == "") {
		$("#Gerer").css({
			display: "none"
		});
		$(".delete").css({
			display: "none"
		});
		$(".deconnecter").css({
			display: "none"
		});
	} else {

		$('.navbar-brand').html((sessionStorage.getItem("nom")).toUpperCase());
		$('.logo').attr("src", "./media/u_images/" + sessionStorage.getItem("img"));
		if (sessionStorage.getItem("statut").toLowerCase() == "admin") {
			$("#Gerer").css({
				display: "block"
			});
			$("#delete").css({
				display: "block"
			});
			$(".deconnecter").css({
				display: "block"
			});

		} else {
			$("#Gerer").css({
				display: "none"
			});
			$(".delete").css({
				display: "none"
			});
			$(".deconnecter").css({
				display: "none"
			});

		}
		if (sessionStorage.getItem("img") == "") {
			$('.logo').attr("src", "./media/u_images/default.jpg");

		} else {
			$('.logo').attr("src", "./media/u_images/" + sessionStorage.getItem("img"));

		}
	}
}

function deconnexion() {
	sessionStorage.setItem("nom", "");
	sessionStorage.setItem("img", "");
	sessionStorage.setItem("statut", "");
	location.href = "./index.html";
}

function accueil() {
	location.href = "./index.html";
}

function gerer() {
	location.href = "./Gestion.html";
}

function services() {
	location.href = "./Services.html";
}

function contacts() {
	location.href = "./Contacts.html";
}

function apropos() {
	location.href = "./Apropos.html";
}

function gest_services() {
	var fichier = new FormData();
	var image = $("#service_img")[0].files;
	var grand_titre = $("#Grand_titre").val();
	var petit_titre = $("#Petit_titre").val();
	var span = $("#Titre_du_span").val();
	var details = $("#details").val();

	var photo = image[0];

	if ($("#service_img").val() != "") {

		if (grand_titre != "") {

			if (petit_titre != "") {

				if (span != "") {

					if (details != "") {

						if (confirm("Confirmez l'ajout du service dans le menu service")) {

							fichier.append("ent", "Ajout_service");
							fichier.append("photo", photo);
							fichier.append("g_titre", grand_titre);
							fichier.append("p_titre", petit_titre);
							fichier.append("span", span);
							fichier.append("detail", details);

							$.ajax({
								url: "./model/scripts.php",
								type: "POST",
								data: fichier,
								contentType: false,
								processData: false,

								error: function (data) {
									console.log(data);
								},
								
								success: function (data) {
									alert(data);
									var data2 = JSON.parse(data);

									if (data2[0] != 0) {

										var succes = "Services Ajouter avec succès";
										alert(succes);

										$("#service_img").val("");
										$("#Grand_titre").val("");
										$("#Petit_titre").val("");
										$("#Titre_du_span").val("");
										$("#details").val("");
										table_services();

									}

								}
							});
						}
					} else {
						var d = "Veuillez inserer les détails du service";
					}
				} else {
					var s = "Veuillez inserer le dernier titre du service";
					alert(s);
				}
			} else {
				var p_titre = "Veuillez inserer le petit titre du service";
				alert(p_titre);
			}
		} else {
			var g_titre = "Veuillez insérer le grand titre du service";
			alert(g_titre);
		}
	} else {
		var im = "Veuillez selectionner l'image qui répresente le service";
		alert(im);
	}
}

function gest_card() {
	var fichier = new FormData();
	var image = $("#card_img")[0].files;
	var titre = $("#titre_card").val();
	var details = $("#details_card").val();

	var photo = image[0];

	if ($("#card_img").val() != "") {

		if (titre != "") {

			if (details != "") {

				if (confirm("Confirmez l'ajout du service dans le menu service")) {

					fichier.append("ent", "Ajout_card");
					fichier.append("photo", photo);
					fichier.append("titre", titre);
					fichier.append("details", details);

					$.ajax({
						url: "./model/scripts.php",
						type: "POST",
						data: fichier,
						contentType: false,
						processData: false,

						error: function (data) {
							console.log(data);
						},

						success: function (data) {

							var data2 = JSON.parse(data);

							if (data2[0] != 0) {

								var succes = "Card Ajouter avec succès";
								alert(succes);

								actualiser2();

							}

						}
					});
				}
			} else {
				var det = "Veuillez inserer les détails";
				alert(det);
			}
		} else {
			var g_titre = "Veuillez insérer le titre";
			alert(g_titre);
		}
	} else {
		var im = "Veuillez selectionner l'image du card";
		alert(im);
	}
}

function gest_paragraphes() {

	var titre = $("#titre_p").val();
	var details = $("#details_p").val();

	if (titre != "") {
		if (details != "") {
			if (confirm("Confirmez l'ajout du paragraphe en accueil")) {
				$.ajax({
					url: "./model/scripts.php",
					type: "POST",
					data: {
						'ent': 'Ajout_paragraphe',
						"titre": titre,
						"details": details
					},

					error: function (data) {
						console.log(data);
					},
					success: function (data) {
						var data2 = JSON.parse(data);

						if (data2[0] != 0) {

							var succes = "Paragraphe Ajouter avec succès";
							alert(succes);

							actualiser1();

						}

					}
				});
			}
		} else {
			var _details = "Veuillez inserer les détails du paragraphe";
			alert(_details);
		}
	} else {
		var _titre = "Veuillez insérer le titre du paragraphe";
		alert(_titre);
	}
}