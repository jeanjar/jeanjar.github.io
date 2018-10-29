(function($){
	'use strict';

	$(window).on('load', function() {
		/*------------------
			Preloder
		--------------------*/
		$(".loader").fadeOut();
		$("#preloder").delay(400).fadeOut("slow");

	});

	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	/*------------------
		WOW JS
	--------------------*/
	new WOW().init();
})(jQuery);
