$(function(){

	$(document).on( 'scroll', function(){

		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});

	$('.scroll-top-wrapper').on('click', scrollToTop);
});

function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});

// $(document).ready(function(){
// 	var header = $('.site-wrapper');
//
// 	var backgrounds = new Array(
// 			'url(../public/images/bg2.jpeg)'
// 		, 'url(../public/images/bg3.jpeg)'
// 		, 'url(../public/images/bg4.jpeg)'
// 	);
//
// 	var current = 0;
//
// 	function nextBackground() {
// 	    current++;
// 	    current = current % backgrounds.length;
// 	    header.css('background-image', backgrounds[current]);
// 	}
// 	setInterval(nextBackground, 1000);
//
// 	header.css('background-image', backgrounds[0]);

//THIS CODE IS BROKEN..SUPPOSED TO CHANGE ICON OF NAVBAR
// $('#dLabel').click(function(){
//   $('#links').toggle('1000');
//   $("i",this).toggleClass("icon-circle-arrow-up icon-circle-arrow-down");
// });

// $('#dLabel').click(function(){
// 	$(this).data('clicked', true);
// 	if ($('#dLabel').data('clicked')) {
// 		alert('yes');
// 	})
// }
