    


  // var web_site="http://localhost/";       var serviceURL = web_site+"m/services/";
      //var serviceURL = "http://portail.petrom.ma/m/services/";




        var web_site="http://212.217.70.190/";  var serviceURL = web_site+"m/services/";


var g_id_station="rien";
var g_coord="rien";

var g_my_position_latitude="rien";
var g_my_position_longitude="rien";

var g_date_resultat_rapport="";
var g_heure_resultat_rapport="";
var g_minute_resultat_rapport="";
var g_distributeur_resultat_rapport="";
var g_carburant_resultat_rapport="";
var g_limit_resultat_rapport="";


function refreshPage(page) {
  $.mobile.changePage(
    page,
    {
      allowSamePageTransition : true,
      transition              : 'none',
      showLoadMsg             : false,
      reloadPage              : true
    }
  );
}

function sleep_mcf(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

