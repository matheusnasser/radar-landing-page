$(function() {
	$('div#menu a').bind('click', function(event) {
	  var $anchor = $(this);
	  
	  $('html, body').stop().animate({
		scrollLeft: $($anchor.attr('href')).offset().left - 500
	  }, 1500);
	  event.preventDefault();
	});
  });

  

  $(document).ready(function(){
	$("#btn-produtor").click(function(){
	  $("#produtor").fadeIn(1500,() => {
		  $("#produtor-txt").fadeIn(500).removeClass("hidden");
	  });

	});
  });


