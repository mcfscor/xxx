 $(document).bind("mobileinit", function(){
  
var usera = navigator.userAgent.toLowerCase();
                var isAndroid = usera.indexOf("android") > -1;
                if(isAndroid) {
                    $.mobile.maxTransitionWidth = 1;
                }
   if($.mobile.allowCrossDomainPages==false)
    $.mobile.allowCrossDomainPages = true;
  
   if($.support.cors==false)
    $.support.cors = true;

   if ($.mobile.phonegapNavigationEnabled==false)
   	$.mobile.phonegapNavigationEnabled=true;
   
   if ($.mobile.buttonMarkup.hoverDelay==false)
   	$.mobile.buttonMarkup.hoverDelay=true;

   if ($.mobile.pushStateEnabled==true)
   	$.mobile.pushStateEnabled=false;
   
 
});