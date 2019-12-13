$(function() {
	$('div#menu a').bind('click', function(event) {
	  var $anchor = $(this);
	  
	  $('html, body').stop().animate({
		scrollLeft: $($anchor.attr('href')).offset().left - 500
	  }, 1000);
	  event.preventDefault();
	});
  });