var login = document.getElementById('menu2');
		var home = document.getElementById('menu1');
		var movie = document.getElementById('menu3');
		var call = document.getElementById('menu4');
		function rolar(){
			tempo = 0;
			if(document.getElementById('users').scrollLeft < (document.getElementById('login').offsetLeft - (document.body.scrollWidth / 2.8)) ){
			  document.getElementById('users').scrollLeft += 10;
			  setTimeout(function(){ rolar() }, tempo);
			}else if(document.getElementById('users').scrollLeft > (document.getElementById('login').offsetLeft - (document.body.scrollWidth / 2.9)) ){
			  document.getElementById('users').scrollLeft -= 10;
			  setTimeout(function(){ rolar() }, tempo);
			}
		}
		function voltar(){
			tempo = 0;
			document.getElementById('users').scrollLeft -= 10;
			if(document.getElementById('users').scrollLeft > 0 ){
			  setTimeout(function(){ voltar() }, tempo);
			}else{
				
			}
		}
		function video(){
			tempo = 0;
			if(document.getElementById('users').scrollLeft < (document.getElementById('img9').offsetLeft - (document.body.scrollWidth / 3.8)) ){
			  document.getElementById('users').scrollLeft += 10;
			  setTimeout(function(){ video() }, tempo);
			}else if(document.getElementById('users').scrollLeft > (document.getElementById('img9').offsetLeft - (document.body.scrollWidth / 3.9)) ){
			  document.getElementById('users').scrollLeft -= 10;
			  setTimeout(function(){ video() }, tempo);
			}
		}
		function contato(){
			tempo = 0;
			if(document.getElementById('users').scrollLeft < 6250 ){
			  document.getElementById('users').scrollLeft += 10;
			  setTimeout(function(){ contato() }, tempo);
			}else if(document.getElementById('users').scrollLeft > 6260 ){
			  document.getElementById('users').scrollLeft -= 10;
			  setTimeout(function(){ contato() }, tempo);
			}
		}
		login.onclick = function () {
			rolar();
		};
		home.onclick = function () {
			voltar();
		};
		movie.onclick = function () {
			video();
		};
		call.onclick = function () {
			contato();
		};