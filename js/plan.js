$('#plan_page').bind('pageinit',function(event){

	$("#map_canvas").width($(document).width());  
        $("#map_canvas").height( $(window).height() - ($("div.ui-header").outerHeight() ) );
       
		
		var supportsOrientationChange = "onorientationchange" in window,
		    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

		window.addEventListener(orientationEvent, function() {
			$("#map_canvas").width($(document).width());  
        	$("#map_canvas").height( $(window).height() - ($("div.ui-header").outerHeight()+40 ) );
		    //alert('HOLY ROTATING SCREENS BATMAN:' + window.orientation + " " + screen.width);
		}, false);










		var my_position="";
		
	$.mobile.showPageLoadingMsg();		
		
		
navigator.geolocation.getCurrentPosition(onSuccess);

$('#map_canvas').gmap({maxZoom: "17"});
$.getJSON(serviceURL + 'getstations.php', function(data) {



		 
						var stations = data.items;
					
						var iconImage = new google.maps.MarkerImage('images/petrom.png',
				            new google.maps.Size(20, 14),
				            new google.maps.Point(0,0),
				            new google.maps.Point(0, 32)
				        );
				        
				        var iconShadow = new google.maps.MarkerImage('images/petrom_shadow.png',
				            new google.maps.Size(30, 14),
				            new google.maps.Point(0,0),
				            new google.maps.Point(0, 32)
				        );
				        
				        var iconShape = {
				            coord: [1, 1, 1, 32, 32, 32, 32, 1],
				            type: 'poly'
				        };

						var myIcon = { 
				          icon : iconImage,
				          shadow: iconShadow,
				          shape : iconShape
				        };
						
						$.each(stations, function(index, station) 
						{ 
								$('#map_canvas').gmap('addMarker', new google.maps.Marker({
												id:station.id,
									            position: new google.maps.LatLng(station.lat.replace(',','.'),station.log.replace(',','.')) ,
									            shadow: myIcon.shadow,
									            icon: myIcon.icon,
									            shape: myIcon.shape,
									            title: station.libelle
									            }) ).click(
									function(){

										var v_lat=station.lat.replace(',','.');
										var v_log=station.log.replace(',','.');
										var lien=serviceURL+"stationdistance.php";
										var v_destination=v_lat+","+v_log;
										
										var v_distance="";
										var v_duree="";
										var mcf="ss";	

												$('#map_canvas').gmap('openInfoWindow', 
												{ 
													 'content': '<div class="div-text-detail-stations"><b><br/>' + station.libelle +  '</b><strong><span id="distance"><br/>distance:</span><span id="duration"><br/>duration:</span></strong><br/><a href="#station_plan_page" onclick="g_coord=\''+ v_lat +','+v_log+'\';"  ><img src="images/1355600981_CarGrey.png" height="30px">Itin&eacute;raire</a>&nbsp;&nbsp;&nbsp;<a href="#station_detail_page" onclick="g_id_station='+station.id+';"><img src="images/1355600983_application-vnd.oasis.opendocument.spreadsheet-template.png" height="20px">D&eacute;tails</a></div>'
												}, this).show(function(){

													$.getJSON(lien,{origins: my_position, lat: v_destination },function(data){
												 	
												 	if (data.rows[0].elements[0].status=="OK")
												 	{
													 	v_distance=data.rows[0].elements[0].distance.text;
														v_duree=data.rows[0].elements[0].duration.text;
														$('#distance').append(" "+v_distance);
														$('#duration').append(" "+v_duree);
													}
													else
													{
														$('#distance').remove();
														$('#duration').remove();
													}

													});
												});
									});
							
						return;				 
						});
		$.mobile.hidePageLoadingMsg();

	}); // fin getStation
 
		
$('#map_canvas').gmap('refresh'); 
	

function onSuccess(position) {
	my_position=position.coords.latitude +',' + position.coords.longitude;
$('#map_canvas').gmap('addMarker', {/*id:'m_1',*/ 'position': position.coords.latitude +',' + position.coords.longitude , 'bounds': true  }  ); 

    }

    function onError(error) {
        alert('Il n\'est pas possible de detecter votre position!');
    }
		
		
});