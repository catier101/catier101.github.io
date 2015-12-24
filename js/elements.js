jQuery(document).ready(function() {
  var offset = 200;
  var duration = 300;
    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.back-to-top').fadeIn(duration);
      } else {
        jQuery('.back-to-top').fadeOut(duration);
      }
    });
 &nbsp;
 jQuery('.back-to-top').click(function(event) {
   event.preventDefault();
   jQuery('html, body').animate({scrollTop: 0}, duration);
   return false;
 })
 });
}

function move(element) {
  var left = 0
  function frame() {
    left++

    element.style.left = left + 'px'
    if left == 100 {
      clearInterval(id)
    }
    var id = setInterval(frame, 10)

  }
}
