$('#declarer_panne_page').bind('pageinit', function() {	

			$.mobile.showPageLoadingMsg();
			

			$.get(web_site+"m/services/php_tools.php", { option: "panne_assigne_a" },
		    function(data){			 
		    			    		
		    		if (data.resultat!="") 
		    		{
						$("#assigner").append(data.resultat).selectmenu('refresh');
		    		}
		    		else
		    		{
		    			alert('aucun résultat pour l\'assignment d\'une personne'+data.erreur);
		    		};	    		

	   		},'json');




			$.get(web_site+"m/services/php_tools.php", { option: "panne_type" },
		    function(data){	    			 
		    			    		
		    		if (data.resultat!="") 
		    		{						
						$("#type").append(data.resultat).selectmenu('refresh');
						
		    		};
		    		  		

	   		},'json');

	   		


	   		$.get(web_site+"m/services/php_tools.php", { option: "panne_equipement" },
		    function(data){	    			 
		    			    		
		    		if (data.resultat!="") 
		    		{						
						$("#equipement").append(data.resultat).selectmenu('refresh');
						
		    		};
		    		  		
		    		$.mobile.hidePageLoadingMsg();
	   		},'json');





		
            $("#submit").click(function(){
            	
            		  			
				  if (
				   $('#categorie').val() != "" && $('#type').val() != "" &&
				   $('#date_apparition').val() != "" && $('#assigner').val() != 0 &&
				   $("#assigner option:selected").text() &&
				   $('#priorite').val() != "" && $('#etat').val() != "" && 
				   $('#resolution').val() != "" &&  $('#description').val() != "" 
				   ) 
				  {
				  	$.mobile.showPageLoadingMsg();
				  	//debut if test formulaire complet 
					 
					 var date_apparition=$('#date_apparition').val();
					 var id_assigne=$('#assigner').val();
					 var assigne=$("#assigner option:selected").text();
					

					 var description=$('#description').val();
					 var priorite=$('#priorite').val();
					 var etat=$('#etat').val() ;
					 var complete=$('#resolution').val();

					 var id_type=$('#type').val();
					 var type=$('#type option:selected').text();
					 var historique="";

					 var id_equipement=$('#equipement option:selected').val();
					 var code_equipement=$('#equipement  option:selected').text();

					 var serialisation_form="?option=panne_save";
					 serialisation_form+="&date_apparition="+date_apparition;
					 serialisation_form+="&id_assigne="+id_assigne;
					 serialisation_form+="&assigne="+assigne;
					 serialisation_form+="&description="+description;
					 serialisation_form+="&priorite="+priorite;
					 serialisation_form+="&etat="+etat;
					 serialisation_form+="&complete="+complete;
					 serialisation_form+="&id_type="+id_type;
					 serialisation_form+="&type="+type;
					 serialisation_form+="&id_equipement="+id_equipement;
					 serialisation_form+="&code_equipement="+code_equipement;



					  var lien_php=web_site+"m/services/php_tools.php"+serialisation_form;
					 
			//  $('#text').text(lien_php);

					  $.get( lien_php ,  function(data){

					    		if (data.resultat=="no") 
					    		{
									alert('une erreur est survenu lors de l\'enregistrement '+data.erreur);	
					    		}
					    		else
					    		{
					    			
					    			$('#form1').find(':input').each(function()
									{
										switch(this.type)
										{
											case 'password':
											case 'text':
											case 'textarea':
											$(this).val('');
											break;
											case 'checkbox':
											case 'radio':
											this.checked = false;
										}
									});
									alert('declaration Envoyer');
					    		}
					    		
						$.mobile.hidePageLoadingMsg();
					   	},'json');
						
											

 					return false;
 					
					//fin formulaire complet
				  }
				  else
				  {
				  	alert('veuillez svp de saisire tout les informations');				  
				  };

				 return false;
				

            });
        });