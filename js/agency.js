/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
	target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
	$('.navbar-toggle:visible').click();
});

$(function(){

	$(".tombol-free-voucher").click(function(e){
		e.preventDefault();
		statusOpen = $(this).hasClass("open");
		if (statusOpen) {
			$(this).removeClass("open");
			$(".form-popup").stop(true,true).animate({
				width:0,
				height:0
			},300).css("padding","0");
		}
		else{
			$(this).addClass("open");
			$(".form-popup").stop(true,true).animate({
				width:350,
				height:520,
			},300).css("padding","15px 20px");                
		}            
	});
        //$(window).scroll(function(){
        //    $(".tombol-free-voucher").removeClass("open");
        //    $(".form-popup").delay(1000).stop(true,true).animate({
        //        width:0,
        //        height:0
        //    },300,function(){$(this).css("padding","0")});
        //});
$(".minus-popup").click(function(e){
	e.preventDefault();
	$(".tombol-free-voucher").removeClass("open");
	$(".form-popup").stop(true,true).animate({
		width:0,
		height:0
	},300).css("padding","0");            
});

})