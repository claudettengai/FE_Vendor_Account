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
		var stop_scroll_bottom = $(document).height() - $(window).height() + 140; 
		console.log(stop_scroll_bottom);








		if(fromBottom<=140){
			$('.right-rail').css({
				position:'absolute',
				top: stop_scroll_bottom,
			});
		};





		// Ask Chris -- how do I remove the above statement when fromBottom>140? I want the 
		//scroll to act the way that it was acting before that statement.  






		// if(fromBottom>140){
		// 	$('.right-rail').css({
		// 		position: 'fixed',

		// 	});
		// };


	});

});