//cette page sert a inserer le header dans touts les pages qui contiene une div data-role="page" et id="divpage"
var header='<!--Header de la page avec verification des Users--><!--Header de la page avec verification des Users--> <div id="header_page" data-role="header" data-position="fixed" data-theme="a">							<center>							<img src="images/logo2.png" height="35px" width="55px"/>							</center>							<a  data-ajax="false" data-mini="true"  href="#index_page_type_petrom" data-icon="home" data-iconpos="" data-direction="reverse" data-theme="c">Home</a>							<a id="button_compte" type="button"   data-mini="true"  href="" data-ajax="false" data-icon="gear"  data-rel="dibutton_comptealog" data-transition="fade" data-theme="c">...</a>		</div>		<!--Div Content-->		';



$('#index_page_type_petrom').live('pagecreate',function(event){
	try{
	$('#header_page').remove();
	$('a').attr('data-theme','a');
	$('#index_page a').attr('data-theme','a');
	$('#index_page_type_petrom a').attr('data-theme','a');
	//supprimer button deconnexion/connexion
	$('#index_page_type_petrom #button_compte').remove();
	$('#contact_page a').attr('data-theme','a');
	$('div[data-role="page"]').attr('data-theme','a');
	$('div[data-role="footer"] a').attr('data-theme','a');
	$('div[data-role="page"]').prepend(header);
	$(':input').attr('data-theme','a');
	$('select').attr('data-theme','a');
	}
	catch(err){alert(err.message)}
});



