	//resultat_rapport.html		  

 $('#rapport_mobile_page').bind('pageinit', function() {	
 	var currentTime = new Date()
	var month = currentTime.getMonth() + 1
	var day = currentTime.getDate()
	var year = currentTime.getFullYear()
	x= (day + "/" + month + "/" + year)

	$('#date_rapport').val(x);
 });



 $('#rapport_mobile_page').live('pagebeforeshow', function() {
            $("#submit_rapport").click(function(){
            	
            	var d=$('#date_rapport').val();
            	//alert(d);
	  			if (d!='' && isDate(d)) 
	  			{
		  			var data = $('#form1_rapport').serialize();		             
		             
		             // pour la convertion de la date depuis dd/mm//yyyy vers YYYYMMDD
		            d=d.replace('/','');
		            d=d.replace('/','');
		            var day = d.substr(0,2);
		            var month = d.substr(2,2);
		            var year = d.substr(4,4);        
		            var date = year+month+day;

		            var url="#resultat_rapport_page";

		             g_date_resultat_rapport=date;
					 

		            
		            
		            var dis=$('#id_distributeur').val();
		            var car=$('#id_carburant').val();
		            var heure=$('#heure_rapport').val();
		            var minute=$('#minute_rapport').val();

					if ( isNaN(dis) ) 
		            {
		            	dis="";
		            };		            
		            
					 g_distributeur_resultat_rapport=dis;
					

		            if ( isNaN(car) ) 
		            {
		            	car="";		            
		            };
					 g_carburant_resultat_rapport=car;

		            if ( isNaN(heure) ) 
		            {
		            	heure="";		            
		            };
		             g_heure_resultat_rapport=heure+"0000";


		            if ( isNaN(minute) ) 
		            {
		            	minute="0";		            
		            };
		             g_minute_resultat_rapport=parseInt(minute+"00");
		             g_heure_resultat_rapport=parseInt(g_minute_resultat_rapport)+parseInt(g_heure_resultat_rapport);

					 



		            //alert(url);
		            window.location=url;   
	  			}
	  			else
	  			{
	  				alert('Veuillez svp inserer la date !');
	  			};
	  			return false;
            });
        });