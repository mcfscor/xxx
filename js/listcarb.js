
$('#commandePage').bind('pageinit', function(event)
{

	getProduct();
	$('#form').hide();
		$('#cmdes').hide();
	
});

//var serviceURL = "http://portail.petrom.ma/m/services/";

var carbs;


function getProduct() {
 
 var $x=serviceURL + 'getcarb.php?id_type=' ;
	
$.getJSON($x + '1' , function(data) {
		carbs = data;
	
	$.each(carbs, function(index, carb) {
	
$('#pb').append('<option value='+ carb.unite +','+ carb.libelle +' ><a>'+ carb.libelle + '</a></option>');	
});		
		
});
$.getJSON($x + '2' , function(data) {
		carbs = data;
	
	$.each(carbs, function(index, carb) {
	
$('#pn').append('<option value='+ carb.unite +','+ carb.libelle +'><a>'+ carb.libelle + '</a></option>');	
});		
		
});
$.getJSON($x + '3' , function(data) {
		carbs = data;
	
	$.each(carbs, function(index, carb) {
	
$('#lubr').append('<option value='+ carb.unite +','+ carb.libelle +'><a>'+ carb.libelle + '</a></option>');	
});		
		
});
	$.getJSON($x + '4' , function(data) {
		carbs = data;
	
	$.each(carbs, function(index, carb) {
	
$('#pc').append('<option value='+ carb.unite +','+ carb.libelle +'><a>'+ carb.libelle + '</a></option>');	
});		
		
});
	
	
}
$('#add').click(function()
{
$('#form').show();

$('#cmdes').hide();
});


$('#product').change(function () {
  var elem =$('#product').val().split(',');
   
unite = elem[0];

$('#unite').val(unite);

 
});
	
	
$('#save').click(function()
{
if( $('#product').val()==0 ||   $('#qte').val()==0 ||   $('#date').val()==0 ||   $('#unite').val()==0 )
{

$('#adda').attr('href' , 'checkform.html'); 

}
else{
$('#form').hide();

$('#adda').attr('href' , ''); 
var elem =$('#product').val().split(',');   
var unite = elem[0];
var lib= elem[1];
var qte= $('#qte').val();
var date= $('#date').val();

 $('#commandesList').append('<li id="'+$('#commandesList li').size() +'"><img src="images/icons/commandes.png" /><h3>&nbsp;&nbsp;&nbsp;'  + lib + '&nbsp;&nbsp;&nbsp' + qte + '&nbsp;&nbsp;&nbsp;' + unite + '&nbsp;&nbsp;&nbsp;' + date + '&nbsp;&nbsp;&nbsp;<img align="right" src="images/delete.png" class="deleteMe" onclick="deleteMe('+ $('#commandesList li').size() +')"/></a></h3></li>');
$('#commandesList').listview('refresh');	
$('#cmdes').show();
}	

});
function deleteMe(lid){
    $('#'+lid).remove();
    $('#commandesList').listview('refresh');
}
$('#retour').click(function()
{
	$('#form').hide();
		$('#cmdes').show();

});





