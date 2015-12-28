$(document).ready(function(){



////////////////BANNER OVERLAY/////////////////////////





	$('.banner').mouseenter(function(){


		var bannerHeight= $('.banner').height();
		// console.log(bannerHeight)

		var bannerLineHeight= bannerHeight/24
		// console.log(bannerLineHeight)

		$('.banner_overlay').css({
			height: bannerHeight,
			lineHeight: bannerLineHeight
		});


		$('.banner_overlay').animate({margin: 0, opacity:1}, 100);
		
	});



	$('.banner').mouseleave(function(){
		$('.banner_overlay').animate({marginTop: "-10px", opacity:0}, 100);
	});





	$('#logo').mouseenter(function(){

		$('.logo_overlay').animate({marginTop: "-75px", opacity:1}, 100);
	});


	$('#logo').mouseleave(function(){
		$('.logo_overlay').animate({marginTop: "-85px", opacity:0}, 100);
	});





////////////////ALERT BOX/////////////////////////



	// $('#description').click(function(){
	// 	$('.alert_box').removeClass('hide');
	// });






////////////////ADD DESCRIPTION/////////////////////////
	


	
	$('#description').mouseenter(function(){
		$('.fa-pencil').removeClass('hide');

	});

	$('#description').mouseleave(function(){
		$('.fa-pencil').addClass('hide');

	});
	

	$('#description').click(function(){
		$(this).css({
			boxShadow: '0px 0px 3px 3px #84cdb6',
			});
		$('.descript_text').css({
			fontStyle: "normal",
			})
		
		$('.fa-pencil').removeClass('hide');



		var coDescriptText = $('.descript_text').text();
		$('.descript_text').text(coDescriptText);
		console.log(coDescriptText)




		});




	// $.fn.inlineEdit = function(replaceWith, connectWith) {

	// 	 $(this).click(function() {
      

	//         var elem = $(this);
	        

	//         elem.hide();
	//         elem.after(replaceWith);
	//         replaceWith.focus();

	//         replaceWith.blur(function() {

	//             if ($(this).val() != "") {
	//                 connectWith.val($(this).val()).change();
	//                 elem.text($(this).val());
	//             }

	//             $(this).remove();
	//             elem.show();
	//         });
	//     });
	// };



	// $('p').inlineEdit(replaceWith, connectWith);



// how do i remove this when i click out? 

	// $(document).on('click', function(){
	// 	$('#description').css({
	// 		backgroundColor: '#f4f7f8'
	// 	})
	// })



});