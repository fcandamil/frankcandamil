jQuery(function($) {
	$( "div ul li a.lb_logos,div ul li a.lb_mobile").rlightbox({counterDelimiter: " of "});
	
	$("div#websites-row div:nth-child(2n+1),div#mobile-row div:nth-child(2n+1), div#identity-row div:nth-child(2n+1)").css("float", "right");
	
	$('.bxslider').bxSlider({
  mode: 'vertical',
  slideMargin: 0
	});
	
});
  

   
