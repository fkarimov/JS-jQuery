$(document).ready(function(){
	var ask = 16;
	var grid = function(n){
		$('.square').remove();
		for(var i=0; i<n; i++){
			for(var j=0; j<n; j++){
				$('.grid').append('<div class="square"></div>');
				$('.square').width(960/n-2);
				$('.square').height(960/n-2);
			}
		}
	};
	var moving = function(){
	$('.square').on('mouseenter', function(){
		$(this).addClass('sq-color');
	});
	};
	var getColor = function(){
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};
	var colorize = function(){
		$('.square').on('mouseenter', function(){
			$(this).css('background', getColor);
		});
	};
	var doOpacity = function(s){
		var value = s.css('opacity');
		var nextValue = value - 0.1;
		if (nextValue>0){ 
			s.css('opacity', nextValue);
		}else{
			s.css('opacity', '0');
		}
	};
	var opacity = function(){
		$('.square').on('mouseenter', function(){
			doOpacity($(this));
		});
	};
	grid(ask);
	moving();
	$('.default').on('click', function(){
		ask = prompt("How many cells you want?(between 1 and 80)", 16);
		grid(ask);
		moving();
	});
	$('.colorized').on('click', function(){
		ask = prompt("How many cells you want?(between 1 and 80)", 16);
		grid(ask);
		colorize();
	});
	$('.opacity').on('click', function(){
		ask = prompt("How many cells you want?(between 1 and 80)", 16);
		grid(ask);
		opacity();
	});
});