$(function(){

	$(document).on( 'scroll', function(){

		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
			// jQuery('.about').stop().animate({ right: '0px' });
	      // }
		} else {
			$('.scroll-top-wrapper').removeClass('show');
			// jQuery('.totop').stop().animate({ right: '-300px' });
      // }
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

$(".hover-first").hover(function(){ //LOOK FOR CONDENSED WAY TO DO THIS
 $(".workicon1").stop().animate({"top" : "-20px"});
}, function(){
 $(".workicon1").stop().animate({"top": "0"});
})

$(".hover-second").hover(function(){
 $(".workicon2").stop().animate({"top" : "-20px"});
}, function(){
 $(".workicon2").stop().animate({"top": "0"});
})

$(".hover-third").hover(function(){
 $(".workicon3").stop().animate({"top" : "-20px"});
}, function(){
 $(".workicon3").stop().animate({"top": "0"});
})
//
// $(".hover").hover(function(){ //LOOK FOR CONDENSED WAY TO DO THIS
// 	$(".hovertrue").hover(function(){
// 		var true = 0;
// 	}
//  $(".workicon1").stop().animate({"top" : "-20px"});
// }, function(){
//  $(".workicon1").stop().animate({"top": "0"});
// })

function animate(opts) { // review this

  var start = new Date

  var id = setInterval(function() {
    var timePassed = new Date - start
    var progress = timePassed / opts.duration

    if (progress > 1) progress = 1

    var delta = opts.delta(progress)
    opts.step(delta)

    if (progress == 1) {
      clearInterval(id)
    }
  }, opts.delay || 10)

}

function animateText(textArea) {
  var text = textArea.value
  var to = text.length, from = 0

  animate({
    delay: 20,
    duration: 1000,
    delta: delta,
    step: function(delta) {
      var result = (to-from) * delta + from
      textArea.value = text.substr(0, Math.ceil(result))
    }
  })
}


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
