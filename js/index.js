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
  
//produtor

  $(document).ready(function(){
	$("#produtor-img").hover(function(){
	  $("#user1").slideDown(1000,() => {
		  $("#produtor-txt").fadeIn(500);
	  });

	});
  })

  
  
  $(document).ready(function(){
	$("#cooperativa-img").hover(function(){
	  $("#user2").slideDown(1000,() => {
		  $("#cooperativa-txt").fadeIn(500)
	  });

	});
  })


  $(document).ready(() => {
	  $("#industria-img").hover(() => {
		  $("#user3").slideDown(1000, () => {
			  $("#industria-txt").fadeIn(500)
		  })
	  })
  })


  $(document).ready( () => {
	  $("#corretora-img").hover( () => {
		  $("#user4").slideDown(1000, () => {
			  $("#corretora-txt").fadeIn(500);
		  })
	  })
  })
  
 

  $(document).ready(function() {
	$("#produtor-close-span").click(function() { 
		$("#user1").slideUp(1500);
	})
})


$(document).ready(function() {
	$("#cooperativa-close-span").click(function() { 
		$("#user2").slideUp(1500);
	})
})

$(document).ready(function() {
	$("#industria-close-span").click(function() { 
		$("#user3").slideUp(1500);
	})
})
$(document).ready(function() {
	$("#corretora-close-span").click(function() { 
		$("#user4").slideUp(1500);
	})
})


