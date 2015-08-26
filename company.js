$(document).ready(function(){



////////////////BANNER OVERLAY/////////////////////////

	var bannerHeight= $('.banner').height();
	console.log(bannerHeight)

	var bannerLineHeight= bannerHeight/24
	console.log(bannerLineHeight)

	$('.banner_overlay').css({
		height: bannerHeight,
		lineHeight: bannerLineHeight
	});




	$('.banner').mouseenter(function(){
		$('.banner_overlay').animate({margin: 0, opacity:1}, 100);
	});

	$('.banner').mouseleave(function(){
		$('.banner_overlay').animate({marginTop: "-10px", opacity:0}, 100);
	});












	$('#description').click(function(){
		$('.alert_box').removeClass('hide');
	});






////////////////ADD DESCRIPTION/////////////////////////
	


	
	$('#description').mouseenter(function(){
		$('.fa-pencil').removeClass('hide');

	});

	$('#description').mouseleave(function(){
		$('.fa-pencil').addClass('hide');

	});
	

	$('#description').click(function(){
		$(this).css({
			backgroundColor: 'white',
			boxShadow: '0px 0px 2px 2px #84cdb6'	
			})
		$('.fa-pencil').removeClass('hide');
	});



// how do i remove this when i click out? 

	// $(document).on('click', function(){
	// 	$('#description').css({
	// 		backgroundColor: '#f4f7f8'
	// 	})
	// })



});