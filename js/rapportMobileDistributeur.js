var r_dis_show_ok=false;

$('#rapport_mobile_page').live('pageshow',function(){
	$.mobile.showPageLoadingMsg();
	if (r_dis_show_ok==true) {
			$.mobile.hidePageLoadingMsg();
	};

});

$('#rapport_mobile_page').bind('pageinit', function(){
		$.get(web_site+"m/services/php_tools.php", { option: "distributeur" },
	    
	    function(data){
	    		if (data.resultat!="") 
	    		{
	    			//$('div[data-role=content]').attr('class',' ');
					$('#id_distributeur').append(data.resultat);
					r_dis_show_ok=true;
	    		}
	    		else
	    		{
	    			r_dis_show_ok=false;
	    		}

	    
				$.mobile.hidePageLoadingMsg();
				
	   	},'json');	   		
});

