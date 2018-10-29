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
		Navigation
	--------------------*/
	var header_height = $('.intro-section').innerHeight();

	$(window).on('scroll resize',function(e) {
		if ($(this).scrollTop() > header_height) {
			$('#navigation-toggle').addClass('sticky');
		}else{
			$('#navigation-toggle').removeClass('sticky');
		}
		e.preventDefault();
	});

	$('#navigation-toggle').on('click', function(event) {
		$('.nav-section').addClass('active');
		event.preventDefault();
	});

	$('.close-nav').on('click', function(event) {
		$('.nav-section').removeClass('active');
		event.preventDefault();
	});

	$('.menu-list').onePageNav({
		easing: 'swing'
	});



	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});



	/*------------------
		Popup
	--------------------*/
	$('.portfolio-item').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 500,
	});



	/*------------------
		Isotope Filter
	--------------------*/
	var $container = $('.isotope_items');
	$container.isotope();

	$('.portfolio-filter li').on("click", function(){
		$(".portfolio-filter li").removeClass("active");
		$(this).addClass("active");				 
		var selector = $(this).attr('data-filter');
		$(".isotope_items").isotope({
				filter: selector,
				animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
		return false;
	});



	/*------------------
		Testimonial
	--------------------*/
	$('#test_slider').owlCarousel({
		dots: false,
		nav: true,
		loop: true,
		margin:30,
		smartSpeed: 700,
		items:1,
		autoplay:true,
		navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>']
	});


	/*------------------
		WOW JS
	--------------------*/
	new WOW().init();


	/*------------------
		CONTACT FORM
	--------------------*/
	$('#contact-form').on('submit', function() {
		var send_btn = $('#send-form'),
			form = $(this),
			formdata = $(this).serialize(),
			chack = $('#form-chack');
			send_btn.text('Wait...');

		function reset_form(){
		 	$("#name").val('');
			$("#email").val('');
			$("#massage").val('');
		}

		$.ajax({
			url:  $(form).attr('action'),
			type: 'POST',
			data: formdata,
			success : function(text){
				if (text == "success"){
					send_btn.addClass('done');
					send_btn.text('Success');
					setTimeout(function() {
						reset_form();
						send_btn.removeClass('done');
						send_btn.text('Send Massage');
					}, 3000);
				}
				else {
					reset_form();
					send_btn.addClass('error');
					send_btn.text('Error');
					setTimeout(function() {
						send_btn.removeClass('error');
						send_btn.text('Send Massage');
					}, 5000);
				}
			}
		});
		return false;
	});

	
})(jQuery);