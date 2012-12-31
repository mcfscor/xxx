
$('#station_plan_page').live('pageshow',function(event){

	
		

        navigator.geolocation.getCurrentPosition(function(position)
			  { 
						var coord = g_coord;
						var elem = coord.split(',');
						   
						lat = elem[0];
						lng = elem[1];

						var latlng= new google.maps.LatLng(''+lat+'' , ''+lng+'');


						 var iconImage = new google.maps.MarkerImage('images/petrom.png',
						            new google.maps.Size(20, 14),
						            new google.maps.Point(0,0),
						            new google.maps.Point(0, 32)
						        );
						var map = new google.maps.Map(document.getElementById('map_canvas_itiniraire'), 
						{
							zoom: 15,
							center: latlng,
							mapTypeId: google.maps.MapTypeId.ROADMAP
						});


						var marker = new google.maps.Marker({

						position: latlng,
						map:map,
						icon: iconImage }
						);
						var panel;
						var direction = new google.maps.DirectionsRenderer({
						    map   : map, 
						    panel : panel 
						});
						 var origin      =  new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
						  var  destination = latlng;
						    
						        var request = {
						            origin      : origin,
						            destination : destination,
						            travelMode  : google.maps.DirectionsTravelMode.DRIVING // Type de transport
						        }
						        var directionsService = new google.maps.DirectionsService(); // Service de calcul d'itinéraire
						        directionsService.route(request, function(response, status){ // Envoie de la requête pour calculer le parcours
						            if(status == google.maps.DirectionsStatus.OK){
						                direction.setDirections(response); // Trace l'itinéraire sur la carte et les différentes étapes du parcours
						            }
						        });


		});


});



$('#station_plan_page').live('pagebeforeshow',function(event){

	$('#map_canvas_itiniraire').html(" ");
});



$('#station_plan_page').bind('pageinit',function(event){
		

		$("#map_canvas_itiniraire").width($(document).width());  
        $("#map_canvas_itiniraire").height( $(window).height() - ($("div.ui-header").outerHeight() )-40 );
       
		
		var supportsOrientationChange = "onorientationchange" in window,
		    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

		window.addEventListener(orientationEvent, function() {
			$("#map_canvas_itiniraire").width($(document).width());  
        	$("#map_canvas_itiniraire").height( $(window).height() - ($("div.ui-header").outerHeight() )-40 );
		    //alert('HOLY ROTATING SCREENS BATMAN:' + window.orientation + " " + screen.width);
		}, false);




     });