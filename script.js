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


	});

});