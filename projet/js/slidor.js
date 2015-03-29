/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{


$(window).resize(function() {
	$('h1, h2').css('z-index', 'auto'); //auto reflow
  });
	
$("#logo").mouseout(function() {
	$(this).children().rotate({animateTo:0}) 
});
	
$("#logo").mouseover(function() {
	$(this).children().rotate({animateTo:360}) 
});
	console.log("Le document est pret");
	

	console.log("La mise en place est finie. En attente d'événements...");
});
