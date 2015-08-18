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




// START


		// var alertBottom = $('.alert_box').offset().top+$('.alert_box').outerHeight(true);
  //       // console.log(alertBottom)



    
  //   	if (alertBottom == ($('.footer').offset().top)) {
  //   		return $(document).offset().top;
  
  //   	};

  //   	// console.log(fixedStopPoint); 



  //   	// if (alertBottom <= $('.footer').offset.top){
  //   	// 		$('right-rail').css({
  //   	// 			position: absolute
  //   	// 		});
  //   	// };



// STOP



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



		// if(fromBottom > 141){
		// 	$('.right_rail').css({
		// 		position: 'fixed'
		// 	});

	});

	

////////////////HOVER SIDE BAR/////////////////////////


	$('#banner_photo, .company_info').click(function(){
		$('.alert_box').removeClass('hide');
	});


	$(function() {
	    $( ".sortable" ).sortable();
	    $( "sortable" ).disableSelection();
	  });













});
