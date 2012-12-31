
var lim=10;
var off=0;

$('#resultat_rapport_page').live('pageshow',function(){
	$.mobile.showPageLoadingMsg();
});

$('#resultat_rapport_page').live('pagebeforeshow',function(event){				
	
	//$('#recapitulative').hide();

	if (g_date_resultat_rapport!="") {
		//alert(g_date_resultat_rapport);

		$("#listview1").html(' ');
		$("#rec_listview").html(' ');

		$('#divviewmore').hide();

		var valeur_date=g_date_resultat_rapport;
		var valeur_heure=g_heure_resultat_rapport;
		var id_distributeur=g_distributeur_resultat_rapport;
		var id_carburant=g_carburant_resultat_rapport;
		var v_limit=lim;
		var v_offset=0;


// -------------------------------------------------------------------- >>>>>>recap<<<<<< -----------------------------------------
$.get(web_site+"m/services/resultatRapportPHP.php", { option: "rapports_mobile_recap" , date: valeur_date , heure: valeur_heure},
	function(data){	    			    	
	    		
	    		if (data.resultat!="" && data.total_prix != 0 && data.total_quantite!= 0 && data.total_prix != 0) 
	    		{
			    	var text_html='<li data-divider-theme="e" data-role="list-divider" >Total des ventes <div class="ui-li-count" id="nbr_rec"><span id="nbr_rec_chiffre">'+data.total_vente+'</span> </div></li>';
			    	text_html+='<li><h1>Prix: <u><span id="total_prix">'+data.total_prix+'</span></u> DH</h1><h1>Quantité: <u><span id="total_quantite">'+data.total_quantite+'</span></u> Littre</h1></li>';
			    	text_html+='<li data-divider-theme="e" data-role="list-divider">Total pour chaque Pistolets</li>';			$("#rec_listview").append(text_html);
					$("#rec_listview").append(data.resultat);
			    	$("#rec_listview").listview('refresh');
			    	$('collapsible_resultat_r_recap').collapsibleset( "refresh" );
	    		}
	    		else
	    		{
	    			alert('aucun résultat trouvé !');
	    		};


			    // -------------------------------------------------------------------- resultat -----------------------------------------
				$.get(web_site+"m/services/resultatRapportPHP.php", { option: "rapports_mobile" , date: valeur_date , distributeur: id_distributeur , carburant: id_carburant ,limit: v_limit , offset: v_offset, heure: valeur_heure},
			    function(d){	    			 
			    		
			    		$.mobile.showPageLoadingMsg();	    		

			    		if (d.resultat!="") 
			    		{
			    			//alert('resultat:'+d.resultat);							
							$("#listview1").html(d.resultat).listview('refresh');
							$('#nbr').html($('#listview1 li').length - 1);
							$('#divviewmore').show();
							$('collapsible_resultat_r_recap').collapsibleset( "refresh" );
			    		}
			    		else
			    		{
			    			alert('aucun résultat trouvé !');
			    			
			    			$('#listview1').hide();
			    		};				

						$.mobile.hidePageLoadingMsg();
			   	},'json');
				// -------------------------------------------------------------------- resultat -----------------------------------------
	

	
	$.mobile.hidePageLoadingMsg();

	},'json');
// -------------------------------------------------------------------- >>>>>>recap<<<<<< -----------------------------------------
		



	

	}//end if
	else{
		alert('date incorrecte');
	};

	   		  		










//-------------------------------------------------BUTTON View More---------------------------------------

		$('#viewmore').click(function(){


		
		$.mobile.showPageLoadingMsg();
		
		
		var valeur_date=g_date_resultat_rapport;
		var valeur_heure=g_heure_resultat_rapport;
		var id_distributeur=g_distributeur_resultat_rapport;
		var id_carburant=g_carburant_resultat_rapport;


		off+=lim;
		
		var v_limit=lim;
		var v_offset=off;


		
			
			$('#divviewmore').hide();
		
		
		$.get(web_site+"m/services/resultatRapportPHP.php", { option: "more_view" , date: valeur_date , distributeur: id_distributeur , carburant: id_carburant ,limit: v_limit , offset: v_offset ,heure: valeur_heure},
	    function(data){	    			 
	    		
	    		if (data.resultat!="") 
	    		{
	    			//alert('resultat:'+data.resultat);
	    			//alert('limit:'+lim+' offset:'+off);
					$("#listview1").append(data.resultat).listview('refresh');
					$('#nbr').html($('#listview1 li').length - 1);
					$('#divviewmore').show();
	    		}
	    		else
	    		{			
	    			alert('aucun résultat trouvé de plus !');
	    		};
	    		
		
			$.mobile.hidePageLoadingMsg();
			
	   	},'json');


		
		});	// fin evenement click
	});
