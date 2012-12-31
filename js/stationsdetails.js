function isset(variable){
if ( typeof( window[variable] ) != "undefined" ) {
     return true;
   }
else {
     return false;
   }
}

	var r_dis_show_ok=false;

$('#station_detail_page').live('pageshow',function(){
	$.mobile.showPageLoadingMsg();
	if (r_dis_show_ok==true) {
			$.mobile.hidePageLoadingMsg();
	};

});



 
$('#station_detail_page').live('pagebeforeshow',function(event){

	function displayEmployee(data) {
			
			

	var employee = data.item;
	//console.log(employee);
	$('#employeePic').attr('src', 'images/GasStation-icon.png' );
	$('#fullName').text(employee.libelle);
	$('#employeeTitle').text(employee.adresse);
	$('#city').text(employee.ville);
	
	var href='#station_plan_page';
	
  	$('#plan').attr('onclick', "g_coord='"+employee.lat.replace(',','.')+','+employee.log.replace(',','.')+ "';");
  	$('#plan').attr('href',href);



	navigator.geolocation.getCurrentPosition(function(position)
  	{

	  	var dis="";
	  	var dur="";
	  	var d = serviceURL + 'stationdistance.php?origins='+ position.coords.latitude +','+ position.coords.longitude +'&lat='+employee.lat.replace(',','.')+','+employee.log.replace(',','.');	
	  	//$('#duration').text(d);
	  	//alert(d)
		$.getJSON(d,function(data){

			//console.log(data);
			//$('#distance').append(d);
			if (data.rows[0].elements[0].status=="OK") {
			//	alert(data.status);
				$('#info_dis_dur').show();
				dis=data.rows[0].elements[0].distance.text;
				dur=data.rows[0].elements[0].duration.text;
				$('#dis').text(dis);
				$('#dur').text(dur);	
			}else
			{
				
			};
			$.mobile.hidePageLoadingMsg();
											
		});

	});

	
	
	$('#prix_ssp').html('        <b>Prix SSP :</b> ' + employee.prix_ssp + ' Dhs');
	$('#prix_ga').html('        <b>Prix Gasoil :</b> ' +employee.prix_ga+ ' Dhs');
	
	
	if(employee.e_lavage == 1 )
		$('#e_lavage').attr('src', 'images/accept.png');
	else
		$('#e_lavage').attr('src', 'images/delete.png');
	
	
	
	if(employee.e_entretien == 1 )
		$('#e_entretien').attr('src', 'images/accept.png');
	else
		$('#e_entretien').attr('src', 'images/delete.png');
	
	
	
	if(employee.e_boutique == 1 )
		$('#e_boutique').attr('src', 'images/accept.png');
	else
		$('#e_boutique').attr('src', 'images/delete.png');
	
	
	
	if(employee.e_gaz == 1 )
		$('#e_gaz').attr('src', 'images/accept.png');
	else
		$('#e_gaz').attr('src', 'images/delete.png');
	
	
	
	if(employee.e_restauration == 1 )
		$('#e_restauration').attr('src', 'images/accept.png');
	else
		$('#e_restauration').attr('src', 'images/delete.png');

	
	$('#stationsList').listview('refresh');


}// fin displayEmployee
 	

 	$('#info_dis_dur').hide();

	

	if (g_id_station!="rien") {
	var id = g_id_station;

	$.get(serviceURL + 'getstation.php?id='+id, displayEmployee ,'json');
//	refreshPage("#station_detail_page");

	}
	else
		{
			alert('Selectione une station d\'abord');

		};


	
});



