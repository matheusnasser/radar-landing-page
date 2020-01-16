$(function() {
	$('div#menu a').bind('click', function(event) {
	  var $anchor = $(this);
	  
	  $('html, body').stop().animate({
		scrollLeft: $($anchor.attr('href')).offset().left - 500
	  }, 1500);
	  event.preventDefault();
	});
  });
  $(document).keydown(function(objEvent) {
    if (objEvent.keyCode == 9) { 
        objEvent.preventDefault();
    }
})
  

  $(document).ready(function(){
	$("#btn-produtor").click(function(){
	  $("#produtor").fadeIn(1500,() => {
		  $("#produtor-txt").fadeIn(500).removeClass("hidden");
	  });

	});
  });

  $(document).ready(function() {
	  $("#span-close-produtor").click(function() { 
		  $("#produtor").fadeOut(1500);
	  })
  })


  $(document).ready(function() { 
	  $("#cooperativa-btn").click(function() {
		  $("#cooperativa").fadeIn(1500, () => {
			  $("#cooperativa-txt").fadeIn(500).removeClass("hidden");
		  })
	  })
  })

  $(document).ready(function() {
	$("#span-close-cooperativa").click(function() { 
		$("#cooperativa").fadeOut(1500);
	})
})