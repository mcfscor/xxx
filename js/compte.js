	
$('#index_page_type_petrom').live('pagebeforeshow', function (event, ui) {
					//alert('m')
					$('#header_page #button_compte').hide();
	   
	   		
	});

$('div[data-role="page"]').live('pagebeforeshow', function (event, ui) {

		$('#header_page #button_compte').show();

		$.get(web_site+"m/services/php_tools.php", { option: "compte" },
	    
	    function(data){
	    	$('#header_page #button_compte').hide();

	    		if (data.mcf_text!='connexion')
	    		{
	    			//Accées users
					$('#erreur').remove();
					$("#contenu").show();	
	    			//button header page
	    			//alert('debut');
					$('#header_page #button_compte .ui-btn-text').text("Déconnexion");
					$('#header_page #button_compte').attr('onclick',' deco_user();');

	    		}
	    		else
	    		{
	    			//Accées not users
	    			$("#contenu").remove();	
	    			$('#erreur').html('<center><img src="images/stop.png"/><h4> Vous n\'êtes pas connecté !! </h4></center>');
	    			$('#header_page #button_compte .ui-btn-text').text("Connexion");
					$('#header_page #button_compte').attr('href',"#connexion_page");
					$('#header_page #button_compte').attr('data-rel',"dialog");
					
	    		};
	    		$('#header_page #button_compte').show();

	   	},'json');
	   		
	});




