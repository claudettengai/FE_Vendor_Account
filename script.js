$(document).ready(function(){

	////////////////USER DROPDOWN "LEAH REY"/////////////////////////

	$(function() {
	    $( "#menu" ).menu();
	  });

	$("#User").mouseenter(function(){
		$("#User #menu").removeClass('hide');
		// e.stopPropagation();

	});


	
	$('#User').on('mouseleave', function(){
			$("#User #menu").addClass('hide')

	});
	

	////////////////Links to nowhere/////////////////////////

	$('.nowhere').click(function (event) { 
	     event.preventDefault(); 
	 
	});



	////////////////ALERT BOX SIDE BAR/////////////////////////


	// $('#banner_photo, .company_info').click(function(){
	// 	$('.alert_box').removeClass('hide');
	// });



	////////////////Right-Hand Panel Button/////////////////////////
	
	

	$('#local_nav_button').click(function(event){
		// console.log('hello')
		event.stopPropagation();
		$('.right-rail').css({'visibility': 'visible'})
	})


	$(document).click(function(){
		if ($(".button_hide").css('opacity') == 1) {
			$('.right-rail').css({'visibility': 'hidden'});
		};
		$(window).resize(function(){
			if (($(".button_hide").css('opacity') == 0) && ($('.right-rail').css('visibility') == 'hidden')){
				$('.right-rail').css({ 'visibility' : 'visible'})
			};

			if ($(".button_hide").css('opacity') == 1) {
				$('.right-rail').css({'visibility':'hidden'})
			};
		});


	});







	////////////////RIGHT PANEL SCROLL/////////////////////////




	$(window).scroll(function(){

		var fromTop= $(this).scrollTop();
		// $(this) is window
		// console.log(fromTop);
		

		if(fromTop > 426){
			$('.right-rail').addClass("fixed_scroll");
		};


		if(fromTop<= 439){
			$('.right-rail').removeClass('fixed_scroll');
		};



		 if(fromTop >= ($('.co_name_location').position().top - 10)) {
		 	$('#local_nav_button').css({
		 		"margin-top": 0- $(window).height() + ($(window).height() - $('.co_name_location').position().top) + 30,


		 		position: 'fixed',		 		
		 	});
		 };


		 if(fromTop < ($('.co_name_location').position().top - 10)) {
		 	$('#local_nav_button').css({
		 		"margin-top": 20,

		 		position: 'absolute',		 		
		 	});
		 };

		



		////////////////RIGHT PANEL SCROLL/////////////////////////




		$.fn.scrollBottom = function() { 
 		 	return $(document).height() - $(this).scrollTop() - $(this).height(); 
		};





		var fromBottom= $(window).scrollBottom();	
		// console.log(fromBottom);


		var stop_scroll_bottom = $(document).height() - $(window).height() +376 - 140;
		//376 is for the negative margin on the right panel -- see CSS
		// console.log(stop_scroll_bottom);





		if (! $('.alert_box').hasClass('hide')){

			if(fromBottom<=141) {
			
				$('.right-rail').css({
					position:'absolute',
					top: stop_scroll_bottom,
				
				});
			};
		};


		
		// if (! $('.alert_box').hasClass('hide')){
		// 	if ($('.right-rail').css("position", "absolute")) {
		// 		if(fromBottom>141){
		// 			console.log('hello');
		// 			$('.right-rail').css({
		// 				position:'fixed',
		// 				// "margin-top": -376,
		// 			});
		// 		};
		// 	};
		// };



		
	});


	

////////////////ALERT BOX SIDE BAR/////////////////////////


	// $('#banner_photo, .company_info').click(function(){
	// 	$('.alert_box').removeClass('hide');
	// });




////////////////SORTABLE BLOCKS/////////////////////////

	$(function() {
	    $( ".sortable" ).sortable();
	    $( "sortable" ).disableSelection();
	  });




////////////////PRODUCT BLOCKS////////////////////////




	$('.block a').mouseenter(function(){
		$(this).find('.pic_overlay').animate({margin: 0, opacity:1}, 100);
		$(this).find('.draft_sign').addClass('hide');

	});

	$('.block a').mouseleave(function(){
		$(this).find('.pic_overlay').animate({marginTop: "-10px", opacity:0}, 100);
		$(this).find('.draft_sign').removeClass('hide');
	});






////////////////Right RAil -- Local Nav////////////////////////


	
	// console.log($('.co_name_location').offset().top)


	// $('#local_nav_button').css({top: ''})









});






























