
function deco_user(){
	//alert(web_site+"m/services/logout.php");
$.get(web_site+"m/services/logout.php", 
			{ option: "logout" },
			function(data){

	    		if (data.resultat=="ok") 
	    		{
	    			window.location="index.html";
	    		}
	    		else
	    		{
	    			alert('Une erreur est survenue durant la déconnexion');
	    		};	    		
	    		
	   		},'json');
}