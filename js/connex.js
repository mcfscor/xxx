$("#valider_connexion").click(function(){
		
			$(document).ready(function(){
				$.mobile.showPageLoadingMsg();
			});


	var v_username = $("#username_connexion").val();
    var pass = $('#password_connexion').val();
	
    $('#password_connexion').val('');
	
    var md = MD5(pass);

    	//Moncef modification d'URL->
		//var serviceURL = "http://portail.petrom.ma/m/services/login.php";
	var conexion = web_site+"m/services/login.php";


	$.get(conexion, { username: v_username , password: md },

		    function(data){	    			 
		    	
		    	console.log(data);

		    	if(data.Content == 'B' )
				{
						window.location ="#index_page";						
				}
				else
				{
					$("#error_connexion").html(
								'<center><span style= "font-size: 16pt ; color: #E41212 ; " class="strong">&nbsp;&nbsp;&nbsp;Acc&egrave;s refus&eacute;!! Veuillez r&eacute;essayer &agrave; nouveau. </span></center>  '
								);	
					$( "#myPopupDiv_connexion_err" ).popup( "open" );
				}
		    	$(document).ready(function(){
		    		$.mobile.hidePageLoadingMsg();		    		
		    	});

		   	},'json');


				});
	