$(document).ready(function(){

	var nextTick = setInterval(function(){

		var time = new Date();
		var hr = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var ms = time.getMilliseconds();

		$('#hr').text(hr);
		$('#min').text(min);
		$('#sec').text(sec);
		$('#ms').text(ms);

// sets time to white if min is even

		if( (min % 2) == 0){
			$('h3').css("color" , "white");
		}else{
			$('h3').css("color" , "limegreen");
		}



	}, 1);

// randomly changes background every 5 mins

		var color = ["red" , "blue" , "purple" , "green" , "orange" , "brown"];

	var bodyChange = setInterval(function(){
		var rand = Math.floor(Math.random() * color.length);

		$('body').css({background:color[rand]}) 

	}, 300000);

	var titleChange = setInterval(function(){
		var rand = Math.floor(Math.random() * color.length);

		$('h1').css({color:color[rand]})
	
	}, 36000000)

});
