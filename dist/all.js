var images = {
	other : {
		"1" : {
				src : "images/cam2.jpg",
				type : "portrait"
			},
		"2" : {
				src:"images/sam.jpg",
				type : "other"
			},
		"3" : {
				src:"images/view-from-the-top.jpg",
				type : "other"
			},
		"4" : {
				src:"images/sam.jpg",
				type : "other"
			},
		"5" : {
				src:"images/boats.jpg",
				type : "other"
			},
		"6" : {
				src:"images/street-musician.jpg",
				type : "portrait"
			},
		"7" : {
				src:"images/pasta-girl.jpg",
				type : "portrait"
			},
		"8" : {
				src:"images/fish-man.jpg",
				type : "portrait"
			},
		"9" : {
				src:"images/balloon-man.jpg",
				type : "portrait"
			},			

	},
	portraits : {
		"1" : "images/cloudy-creek.jpg",
		"2" : "images/cloudy-creek.jpg",
		"3" : "images/cloudy-creek.jpg",
		"4" : "images/cloudy-creek.jpg",
		"5" : "images/cloudy-creek.jpg",
		"6" : "images/cloudy-creek.jpg"
	},
};
var num = 1;

//load images
for(var i in images.other){
	var image = images.other[i];
	$('#column'+num+'').append('<div class="thumbnail '+ image.type +'"><img src="'+ image.src +'"></div>');
	num += 1;
	if(num === 4){
		num = 1;
	}
}

$('#portraits').on('click', function(e){
	e.preventDefault();
	$('.other').hide();
	$('.portrait').show();
});

$('#other').on('click', function(e){
	e.preventDefault();
	$('.other').show();
	$('.portrait').hide();
});

$('.thumbnail').on('click', function () {
	console.log($(this)[0]);
	var thisPhoto = $(this)[0].innerHTML;
	$('.photos').toggle();
	$('.slider').toggle();
	$('.image').html('<div>'+ thisPhoto +'</div>');
});

$('#closeButton').on('click', function(){
	$('.photos').toggle();
	$('.slider').toggle();
});
