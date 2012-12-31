$('#jauge_page').live('pageshow',function(){

	$.mobile.showPageLoadingMsg();
});

$('#jauge_page').live('pagebeforeshow',function(event){
		$.get(web_site+"m/services/php_tools.php", { option: "contenu_jauge" },
	    
	    function(data){

	    			 
	    		if (data.resultat!="") 
	    		{
					$('#listejauge').html(data.resultat).collapsibleset( "refresh" );
	    		}
	    		else
	    		{
	    			alert('Aucun résultat trouvé !');
	    		}    					

				$.mobile.hidePageLoadingMsg();

	   	},'json');
	   	//$.mobile.loading('hide');	
	});