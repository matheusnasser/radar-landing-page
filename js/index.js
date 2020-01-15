$(function() {
	$('div#menu a').bind('click', function(event) {
	  var $anchor = $(this);
	  
	  $('html, body').stop().animate({
		scrollLeft: $($anchor.attr('href')).offset().left - 500
	  }, 1500);
	  event.preventDefault();
	});
  });

  var modal = document.getElementById("myModal");

  var btn = document.getElementById("myBtn");
  
  var span = document.getElementsByClassName("close")[0];
  
  btn.onclick = function() {
	modal.style.display = "block";
  }
  
  span.onclick = function() {
	modal.style.display = "none";
  }
  
  window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
  }