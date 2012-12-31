//var serviceURL = "http://portail.petrom.ma/m/services/";

var stations;

function onSuccess(position)
{
$('#myposition').text(''); 
$('#myposition').text(position.coords.latitude +','+position.coords.longitude );
//alert(position.coords.latitude +','+position.coords.longitude );

}
navigator.geolocation.getCurrentPosition(onSuccess);

function getStationsList() {
	
$.get(serviceURL + 'getstation.php' , function(data) {
		$('#stationsList li').remove();
		stations = data;
		
		$.each(stations, function(index, station) {
			 console.log(station);	
			$('#stationsList').append('<li><a href="stationdetails.html?id=' + stations.item.id + '"><img src="images/GasStation-icon.png"/><h4>' + stations.item.libelle + '</h4><p>' + stations.item.adresse + '</p><span class="ui-li-count" id="dist_' + stations.item.id + '">' + stations.item.distance + '</span></a></li>');				
		});
		
		$('#stationsList').listview('refresh');
		
		},'json');
}


$('#divpage').bind('pageinit', function(event)
{
	getStationsList();
});
