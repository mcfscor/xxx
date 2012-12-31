	var jsonText="";
	var tableau_commandes= new Array();
	var prise_au_depot_oui=true;
	var change_radio=0;

	var requette_commande="";
	var inserer_cmd_bool=false;


	$('#commande_page').live('pagebeforeshow',function(event){
		$('#livraison_div').hide();
		$.mobile.showPageLoadingMsg();
		alert('Ce module est on construction !')



		// ---------------------------------commande produits---------------------------
			
				//$(document).ready(function(){	  $.mobile.showPageLoadingMsg();	});
				

				//$('#contenu').attr('class', 'ui-disabled');
				

				//$("#product").hide();
/*	
				$("input[type='radio']").bind( "change", function(event) {
				  if (change_radio==0) {hide();
				  	alert('ok');
				  	change_radio=1;
				  }else
				  {
				  	change_radio=0;
				  };
				});
*/



				
				$("#product").hide();
				
				/*
				var date_liv = $('#date_livraison').val();

				if (date_liv!="") {
					$.get(web_site+"m/services/php_tools.php", { option: "commande_save", date_livraison: date_liv },
				    function(data){
							
						
				    		if (data.resultat=="ok") 
				    		{
				    			//alert('ajout de cmd avec succès');				    			
				    			$.get(web_site+"m/services/php_tools.php", { option: "commande_get_id" },
								    function(data){
											
										
								    		if (data.resultat!=0) 
								    		{
								    			//alert('ajout de cmd avec succès');				    			
								    			// mnt on peut ajouter la commande
								    			//et executer les requette de chaque produit

								    		}
								    		else
								    		{
								    			alert('Ressayer plus tard');
								    		};
								    	
						   			},'json');
				    		}//fin if RESULTAT OK
				    		else
				    		{
				    			alert('rien n\'e c\'est passé')	    			
				    		};
				    	
		   			},'json');
				};
				*/






				$.get(web_site+"m/services/php_tools.php", { option: "commande_type_produits" },
			    function(data){
						
					
			    		if (data.resultat!="") 
			    		{
							$("#type_produit").html("");
							$("#type_produit").append("<option  value=\"\" selected >--Choisissez--</option>");
			    			$("#type_produit").append(data.resultat);
			    		}
			    		else
			    		{
			    			$("#type_produit").append('<option>type produits indisponible</option>');			    			
			    		};
			    
	   			},'json');

			


		// ---------------------------------commande produits---------------------------




		$('#enregistrer').click(function(){
				
			//alert('Ce module est en construction !');

			var v_date_livraison=$('#date_livraison').val();
			var v_nbr_produit=$('#nbr_prod').val();

			//code metier ----------------commande save----------------------
			alert('ok')
			if (v_date_livraison !="" &&  !isNaN(v_nbr_produit) && tableau_commandes.length>=0) {

				alert('debut de function enregistrer')

			$.get(web_site+"m/services/php_tools.php", { option: "commande_save_premier" ,date_livraison: v_date_livraison},//il faut ajouté le nombre de produit
			    function(data){

			    		if (data.resultat=="ok")
			    		{
			    			alert('commande_save_premier resultat : '+data.resultat);
			    			//tout le traitement exacte

			    			//--Mcf----Mcf----Mcf----Mcf----Mcf----Mcf----Mcf----Mcf----Mcf----Mcf----Mcf----Mcf--
			    			$.get(web_site+"m/services/php_tools.php", { option: "commande_get_id" },//il faut ajouté le nombre de produit
								    function(data){

								    	if (data.resultat!=0)
								    		{
								    			alert('commande_get_id ok'+data.resultat);
								    			$.get(web_site+"m/services/php_tools.php", { option: "commande_get_id" },//il faut ajouté le nombre de produit
											    function(data)
											    {

											    	if (data.resultat!=0)
											    		{
//---------------------------------------____________________________________________________________________________________________________________

//---------------------------------------____________________________________________________________________________________________________________
											    		}
											    	else
												    	{
												    		alert('une erreur est survenu l\'hord du get de l\'id de la commande');
												    	};

									   			},'json');
								    		}
								    	else
									    	{
									    		alert('une erreur est survenu l\'hord du get de l\'id de la commande');
									    	};

						   			},'json');
			    			//--Mcf----Mcf----Mcf----Mcf----Mcf----Mcf----Mcf----Mcf----Mcf----Mcf----Mcf----Mcf--
			    		}
			    		else
			    		{
			    			alert('erreur: '+data.resultat);
			    		};
	   			},'json');
			};
			/*
			if (v_date_livraison!="" && !isNaN(v_nbr_produit) ) {
				
			};
			*/	

			//code metier
			
			return false;
		});



$('#type_produit').change(function () 
			{
				$.mobile.showPageLoadingMsg();
				
				var type_p = $('#type_produit option:selected').val();
				
				$.get(web_site+"m/services/php_tools.php", { option: "commande_produits", type_produit: type_p },
				    function(data){	   
				    		
				    		if (data.resultat!="rien" ) 
				    		{
				    			// alert(data.resultat)
								
								//on affiche mnt le select des produit
								$("#product").show(500);
								$("#produit").html("");
								$("#produit").append("<option  value=\"\" selected >--Choisissez--</option>");
								$("#produit").append(data.resultat).selectmenu("refresh");
								
				    		}
				    		else
				    		{
				    			//alert('Aucun produits disponible !');
				    			$("#produit").html("").selectmenu("refresh");
				    			$("#product").hide(500);		    			
				    		};
		    		
				    	$.mobile.hidePageLoadingMsg();
		   			},'json');
		   	});


	$.mobile.hidePageLoadingMsg();

	});




	$('#produit').change(function () 
			{
				$.mobile.showPageLoadingMsg();
				var unite_temp="";
				var temp = $('#produit option:selected').val();
				var table=temp.split('_');
				unite_temp=table[1];
				//alert(table[1]);				
				//alert(temp[2])
				
				$("#unite").val(unite_temp);

		   		$.mobile.hidePageLoadingMsg();
		   	});


$("#radio-choice-b1").change( function() {
		if ($("#radio-choice-b1").val()=="off")
		{	
			$('#livraison_div').show(300);
			prise_au_depot_oui=false;
		}
});


$("#radio-choice-a1").change( function() {
		if ($("#radio-choice-a1").val()=="on")
		{
			$('#livraison_div').hide(300);
			prise_au_depot_oui=true;
		}		
});


$('#ajouter').click(function(){
	$( "#popupBasic" ).popup("open");
	return false;
});

function produit_commande() {
  this.id_cmd = 0;
  this.id_pdt = 0;
  this.qte = 0;
  this.unite = "";
  this.pu = 0;
  this.prise_au_depot = 0;
  this.site_de_livraison = "";
}

var g_id_cmd=0;

$('#b_ajouter_commande').click(function(){
		
	var b=$('#produit').val()
	var unite = (b.split('_'))[1] //unité
	var id_prod = (b.split('_'))[0] //id du produit
	var quantite = $('#quantite').val();

	var retouner=g_id_cmd;

	var site_de_livraison="";
	var prise_depo=1;

	alert(prise_au_depot_oui);

	if(!prise_au_depot_oui)
	{
		site_de_livraison = $('#site_livraison').val();
		prise_depo = 0;
	}

//-------------------------------------------------------------------------------------------------
	if ( unite!="" && !isNaN(id_prod) && !isNaN(quantite) )
	{//if de form

		if (g_id_cmd==0) {
			$.get(web_site+"m/services/php_tools.php", { option: "commande_get_id" },
				    function(data)
				    {
				    		if (data.resultat!="" )
				    		{
				    			g_id_cmd=data.resultat;
				    			retouner=data.resultat;
				    		}
				    		else
				    		{
				    			alert('Commande introuvable veillez svp de redemarer l\'application');
				    		};

				    		$.mobile.hidePageLoadingMsg();

		   			},'json');
		};

	
		var mcf = new produit_commande();
		mcf.id_cmd=retouner;
		mcf.id_pdt = id_prod;
		mcf.qte = quantite;
		mcf.unite = unite;
		mcf.pu = 0;
		mcf.prise_au_depot = prise_depo;
		mcf.site_de_livraison = site_de_livraison;

		tableau_commandes.push(mcf);


	}// fin if de form
	else
	{
		alert('Ressayer de saisire les données du produit')
	}

	  
});

	$('#okokok').click(function(){

		jsonText = JSON.stringify(tableau_commandes);
		alert(jsonText)

		$('#xxxd').text(jsonText);
	});

	function vider_tableau_cmd(){
		tableau_commandes=new Array();
	}

	$('#nonono').click(function(){

		vider_tableau_cmd();
	});