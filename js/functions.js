$(document).ready(function() {

var $window = $(window); 

	function checkWidth() {
        var windowsize = $window.width();
        if (windowsize >= 440) {
       		 $("div ul li a.lb_logos,div ul li a.lb_mobile").rlightbox({counterDelimiter: " of "});
		}
		else if(windowsize <= 439) {
			$("div ul li a").removeClass("lb_logos","lb_mobile");
		}
		
		
	}

checkWidth();
    // Bind event listener
    $(window).resize(checkWidth)
});

$(document).ready(function() {
	$("div#websites-row div:nth-child(2n+1),div#mobile-row div:nth-child(2n+1), div#identity-row div:nth-child(2n+1)").css("float", "right");
});	

$(document).ready(function() {	
	$('.bxslider').bxSlider({
  mode: 'vertical',
  slideMargin: 0
	});
});		
  

   
