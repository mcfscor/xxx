
	
var lim=10;
var off=0;
var date_d="";
var dat_f="";
var x="",y="";

$('#suiviPannes_page').bind('pageinit', function() {


var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();
x= (day + "/" + month + "/" + year);

y="";
var periode_mois=6;
if (month > periode_mois)
{
	month=month-periode_mois;

}else
{	
	var temp= month - periode_mois;
	var temp=temp*1;
	month= 12-temp;
	year--;

};

y= (day + "/" + month + "/" + year);

// 	alert('x:'+x+' -- y:'+y);

//---------------------------
					$('#date').val(x);

					$.mobile.showPageLoadingMsg();
					$('#divviewmore_suivi').hide();
				
				
					var v_limit = 10;
					var v_offset = 0;
					var v_date_debut = x;
					var v_date_fin = y;
					$('#date1').val(y);
					//alert(v_date_fin)

					$.get(web_site+"m/services/php_tools.php", { option: "suivi_pannes" , date_debut: v_date_debut , date_fin: v_date_fin , limit: v_limit , offset: v_offset},
				    function(data){			    		
				    	
				    		if (data.resultat!="") 
				    		{
				    			//alert('resultat:'+data.resultat);
								$('#divviewmore_suivi').show();
								$('#nbr').html($('#listview1_suivi_panne li').length - 1);
								$("#listview1_suivi_panne").html(data.resultat);
								$("#listview1_suivi_panne").listview('refresh');				
								
				    		}
				    		else
				    		{
				    			alert(' aucun résultat trouvé !');
				    			$('#listview1_suivi_panne').hide();
				    		};	    		
				    		$.mobile.hidePageLoadingMsg();
				   	},'json');
//--------------------------


$('#divviewmore_suivi').hide();

$('#rechercher').click(function(){

				date_d=$('#date').val();
				if ( date_d!= "") {

					$.mobile.showPageLoadingMsg();
					$('#divviewmore_suivi').hide();
				
					var v_limit = 10;
					var v_offset = 0;
					var v_date_debut = date_d;
					var v_date_fin = $('#date1').val();
						
					$.get(web_site+"m/services/php_tools.php", { option: "suivi_pannes" , date_debut: v_date_debut , date_fin: v_date_fin , limit: v_limit , offset: v_offset},
				    function(data){			    		
				    	
				    		if (data.resultat!="") 
				    		{
				    			//alert('resultat:'+data.resultat);
								$("#listview1_suivi_panne").html(data.resultat).listview('refresh').show();
								$('#nbr').html($('#listview1_suivi_panne li').length - 1);
								
								$('#divviewmore_suivi').show();
				    		}
				    		else
				    		{
				    			alert(' aucun résultat trouvé !');
				    			$('#listview1_suivi_panne').hide();
				    		};	    		
				    		$.mobile.hidePageLoadingMsg();
				   	},'json');
				}else
				{
					alert('Veuillez svp inserer la date !');
				};	   		

	   		});  		











//-------------------------------------------------BUTTON View More---------------------------------------

	
		$('#viewmore_suivi').click(function(){

				
					$.mobile.showPageLoadingMsg();
					$('#divviewmore_suivi').hide();
				
				
				
				off+=lim;
				
				var v_limit=lim;
				var v_offset=off;

				var v_date_debut = "";
				if ($('#date').val()!="") {
					v_date_debut=$('#date').val();
				}else
				{
					v_date_debut=x;
				};

				var v_date_fin = $('#date1').val();
				if ($('#date1').val()!="") {
					v_date_fin=$('#date1').val();
				}else
				{
					v_date_fin=y;
				};

				$.get(web_site+"m/services/php_tools.php", { option: "suivi_pannes" , date_debut: v_date_debut ,date_fin: v_date_fin , limit: v_limit , offset: v_offset},
			    function(data){
			    	    		
			    		if (data.resultat!="") 
			    		{
			    			//alert('resultat:'+data.resultat);
							$("#listview1_suivi_panne").html(data.resultat).listview('refresh');
							$('#nbr').html($('#listview1_suivi_panne li').length - 1);
							$('#divviewmore_suivi').show();
			    		}
			    		else
			    		{
			    			alert(' aucun résultat de plus '+data.erreur);
			    			
			    		};	    		
			    		$.mobile.hidePageLoadingMsg();
			   	},'json');

		});	// fin evenement click








function updateEndDate() { 
			  var newdate = new Date($('#date').data('datebox').theDate);
			  if ( newdate.getDate() ) 
			  { 
			    newdate.setDate( newdate.getDate() + ( -120 ) );
			        
			    var padMonth = (( newdate.getMonth() < 9 ) ? "0" : "") + ( newdate.getMonth() + 1 ),
			        padDay = (( newdate.getDate() < 10 ) ? "0" : "") + newdate.getDate();
			        
			    $('#date1').val(padDay + "/" + padMonth + "/" + newdate.getFullYear());
			  }
			}

			$('#date').live('change', function() {
			  updateEndDate();
			});

		
		
			$('#masquer').hide();
	});

