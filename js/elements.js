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

$('#dLabel').click(function(){
  $('#links').toggle('1000');
  $("i",this).toggleClass("icon-circle-arrow-up icon-circle-arrow-down");
});

// $('#dLabel').click(function(){
// 	$(this).data('clicked', true);
// 	if ($('#dLabel').data('clicked')) {
// 		alert('yes');
// 	})
// }
