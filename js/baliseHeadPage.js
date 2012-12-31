 	//<!--------------------------------------Moncef-->
try{
function isDate(dateStr) {

var datePat = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
var matchArray = dateStr.match(datePat); // is the format ok?

if (matchArray == null) {
//alert("Please enter date as either mm/dd/yyyy or mm-dd-yyyy.");
return false;
}

return true; // date is valid
}
// mcf_function
function include_js(fileName){
  document.write("<script type='text/javascript' src='"+fileName+"'></script>" );
}
function include_css(fileName){
  document.write("<link rel='stylesheet' href='"+fileName+"' />" );
}
// end mcf_function


// call mcf_function 
document.write('<meta name="viewport" content="width=device-width,initial-scale=1"/>');
include_js("js/global.js");

include_css("css/jquery.mobile-1.2.0.min.css");
include_css('css/xxxx.css');
//include_css('css/design_v1.css');
//include_css("css/ios_mcf_styles.css");
include_css("css/jqm-datebox.min.css");


//include_css("css/button_header.css");

//include_js("http://code.jquery.com/jquery-1.8.1.min.js");
include_js("js/jquery-1.8.2.min.js");

include_js("js/reglageMobileinit.js");

//include_js("http://code.jquery.com/mobile/1.2.0-beta.1/jquery.mobile-1.2.0-beta.1.min.js");
include_js("js/jquery.mobile-1.2.0.js");
include_js("js/insertDivHeade.js");

include_js("js/jqm-datebox.core.min.js");
include_js("js/jqm-datebox.mode.calbox.min.js");
include_js("js/jquery.mobile.datebox.i8n.fr.js");


//include_css("http://code.jquery.com/mobile/1.2.0-beta.1/jquery.mobile-1.2.0-beta.1.min.css");


//<!--------------------------------------------//Moncef-->

}
catch(err)
{
	alert('Erreur de chargement: '+err.message);
}
	