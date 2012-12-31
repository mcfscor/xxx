$('#station_liste').bind('pageinit', function() {

		var stations;
		var my_position="";
 		var geocoder = new google.maps.Geocoder();


 		function codeLatLng(input) {
 			$(document).ready(function(){
				$.mobile.showPageLoadingMsg();
			});
				
				var latlngStr = input.split(",",2);
			    var lat = parseFloat(latlngStr[0]);
			    var lng = parseFloat(latlngStr[1]);
			    var latlng = new google.maps.LatLng(lat, lng);

			    geocoder.geocode({'latLng': latlng}, function(results, status) {
			      if (status == google.maps.GeocoderStatus.OK) {
			        if (results[0]) {
			         
			          var elt = results[0].address_components;
			          
			          var x="";
			          for(i in elt){
			            if(elt[i].types[0] == 'locality')
			            {
			            	getstationsList_recherche();
			            	x=elt[i].long_name;
			         	  
			         	   $('#select-choice').prepend('<option value="'+x+'" selected>'+x+'</option>').selectmenu('refresh') ;

						    var d=serviceURL + 'getstations_par_ville.php';	
							var my_city = x;

							
							$.get(d,{ville: my_city }, function(data) {
								$('#stationsList_recherche li').remove();
								var stations = data.items;
								
								$.each(stations, function(index, station) {
									//console.log(station);
									$('#stationsList_recherche').append('<li><a href="#station_detail_page" onclick=" g_id_station='+ station.id +';"><img src="images/GasStation-icon.png"/><h4>' + station.libelle + '</h4><p>' + station.adresse + '</p></a></li>').listview('refresh');
								});
								
								$(document).ready(function(){
									$.mobile.hidePageLoadingMsg();
								});
								
									
								},'json');
			         	   
			        	}
			          }
			          
			        }
			      } 
			      else
			      {
			        alert("Geocoder failed due to: " + status);
			      }
			    });
				
				
			  }

 function onSuccess(position) {
					

					my_position = position.coords.latitude +',' + position.coords.longitude;
					codeLatLng(my_position);
					
					
			    }

			     function onError(error) {
        alert('Il n\'est pas possible de detecter votre position!');
    } 


function getstationsList_recherche() 
{
		$(document).ready(function(){
			$.mobile.showPageLoadingMsg();
		});

		 var villes;
		 var x=serviceURL + 'getvilles.php' ;

		$.get(x , function(data){				
				villes = data.items;
				$.each(villes, function(index, ville) {
					$('#select-choice').append('<option><a>' + ville.ville + '</a></option>');
				});
				
				$(document).ready(function(){
					$.mobile.hidePageLoadingMsg();
				});

		},'json');

}//fin getstationsList_recherche

    navigator.geolocation.getCurrentPosition(onSuccess);

	$('#select-choice').change(function () 
	{
		$(document).ready(function(){
			$.mobile.showPageLoadingMsg();
		});

		if( $('#select-choice').val() != '' )
		{
			var v_ville=$('#select-choice').val();
			
			
			var d=serviceURL + 'getstations_par_ville.php';		

					$.get(d,{ville: v_ville}, function(data) {
						$('#stationsList_recherche li').remove();
						var stations = data.items;					
						$.each(stations, function(index, station) {
							//console.log(station);          	
							$('#stationsList_recherche').append('<li><a href="#station_detail_page" onclick=" g_id_station='+ station.id +'; "><img src="images/GasStation-icon.png"/><h4>' + station.libelle + '</h4><p>' + station.adresse + '</p></a></li>');
							 $("#stationsList_recherche").listview("refresh");
						});
							$(document).ready(function(){
									$.mobile.hidePageLoadingMsg();
							});
							
						},'json');	
								
		}
		else
		{
		$('#stationsList_recherche li').each(function(){
		$(this).show();
		});

		}

	});

	});