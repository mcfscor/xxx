			
$('#index_page').live('pagebeforeshow', function (event) {
	//alert('m')

		$('#lebody').show("slow");
		/*
				$('#ts4').attr('class', 'ui-disabled');
				$('#ts5').attr('class', 'ui-disabled');
				$('#ts6').attr('class', "ui-disabled");
				$('#ts7').attr('class', "ui-disabled");
				$('#ts8').attr('class', "ui-disabled");

				$('#titre_ts4').attr('class', 'ui-disabled');
				$('#titre_ts5').attr('class', 'ui-disabled');
				$('#titre_ts6').attr('class', "ui-disabled");
				$('#titre_ts7').attr('class', "ui-disabled");
				$('#titre_ts8').attr('class', "ui-disabled");
		*/
				 // Désactivation des Buttons 
				
				$('#button_index_4').addClass('ui-disabled');
				$('#button_index_5').addClass('ui-disabled');
				$('#button_index_6').addClass('ui-disabled');
				$('#button_index_7').addClass('ui-disabled');
				$('#button_index_8').addClass('ui-disabled');

		$.get(web_site+"m/services/php_tools.php", { option: "compte" },
			function(data){	    	
	    	
	    		if (data.mcf_text!='connexion') 
	    		{	    			
	    			//Accées autorisé
	    			/*  			
	    			$('#ts4').attr('class', '');
					$('#ts5').attr('class', '');
					$('#ts6').attr('class', '');
					$('#ts7').attr('class', '');
					$('#ts8').attr('class', '');

					$('#titre_ts4').attr('class', '');
					$('#titre_ts5').attr('class', '');
					$('#titre_ts6').attr('class', '');
					$('#titre_ts7').attr('class', '');
					$('#titre_ts8').attr('class', '');
					*/
					
					// Activation des Buttons
				
					$('#button_index_4').removeClass('ui-disabled');
					$('#button_index_5').removeClass('ui-disabled');
					$('#button_index_6').removeClass('ui-disabled');
					$('#button_index_7').removeClass('ui-disabled');
					$('#button_index_8').removeClass('ui-disabled');

	    		};
	   	},'json');	  
	   		
	});