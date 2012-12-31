$('#contact_page').bind('pageinit',function(event){

	$( "#myPopupDiv_contact" ).popup({ overlayTheme: "a" });


	$( "#myPopupDiv_contact" ).on({
	   popupafteropen: function(event, ui) { 
	   	sleep_mcf(1500);
	   	$("#myPopupDiv_contact").popup("close");
	   }
	});



	$('#id_b_c_test').click(
			function(){
				$("#myPopupDiv_contact").popup();
			});
		
	$('#envoyer').click(
			function(){
				try
				{
					$.mobile.showPageLoadingMsg();

					var v_nom = $('#nom').val();
					var v_prenom = $('#prenom').val();
					var v_email = $('#email').val();
					var v_entreprise = $('#entreprise').val();
					var v_msg = $('#msg').val();

					if (v_nom!="" && v_prenom!="" && v_email!="" && v_entreprise!="" && v_msg!="" ) 
					{
						
						$.get(web_site+"m/services/contact.php", { option: "contact" , nom: v_nom , prenom: v_prenom, email: v_email, entreprise: v_entreprise, msg: v_msg },
					    function(data){	    			 
					    		if (data.resultat=="ok") 
					    		{
					    			
									//vider les champs
									$('#form_contact').find(':input').each(function()
									{
										switch(this.type)
										{
											case 'password':
											case 'select-multiple':
											case 'select-one':
											case 'text':
											case 'textarea':
											$(this).val('');
											break;
											case 'checkbox':
											case 'radio':
											this.checked = false;
										}
									});

									$( "#myPopupDiv_contact" ).popup( "open" );
									

					    		}
					    		else
					    		{
					    			alert('Le message n\'est pas envoyer !');
					    		};

					    	$.mobile.hidePageLoadingMsg();
					   	},'json');
						

					}
					else
						{
							alert('Remplissez tous les champs SVP!');
						};

					return false;
			}
			catch(errrr){alert(errrr.message)}
			});
	});