$(document).ready(function(){

	$(window).scroll(function(){

		var fromTop= $(this).scrollTop();
		// console.log(fromTop);

		if(fromTop > 426){
			$('.right-rail').addClass("fixed_scroll");
		};


		if(fromTop<= 439){
			$('.right-rail').removeClass('fixed_scroll');
		};





		$.fn.scrollBottom = function() { 
 		 	return $(document).height() - this.scrollTop() - this.height(); 
		};





		var fromBottom= $(window).scrollBottom();
		// console.log(fromBottom);
		var stop_scroll_bottom = $(document).height() - $(window).height() +376 - 140;
		//376 is for the negative margin on the right panel -- see CSS
		// console.log(stop_scroll_bottom);



		if(fromBottom<=141){
			$('.right-rail').css({
				position:'absolute',
				top: stop_scroll_bottom,
			});
		};



	});


////////////////ALERT BOX SIDE BAR/////////////////////////



	

////////////////ALERT BOX SIDE BAR/////////////////////////


	$('#banner_photo, .company_info').click(function(){
		$('.alert_box').removeClass('hide');
	});




////////////////SORTABLE BLOCKS/////////////////////////

	$(function() {
	    $( ".sortable" ).sortable();
	    $( "sortable" ).disableSelection();
	  });




////////////////PRODUCT BLOCKS////////////////////////




	$('.block a').mouseenter(function(){
		$('.pic_overlay').animate({margin: 0, opacity:1}, 100);
		$('.draft_sign').addClass('hide');

	});

	$('.block a').mouseleave(function(){
		$('.pic_overlay').animate({marginTop: "-10px", opacity:0}, 100);
		$('.draft_sign').removeClass('hide');
	});










});






























