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
			src:"images/street-musician.jpg",
			type : "portrait"
		},
		"4" : {
			src:"images/pasta-girl.jpg",
			type : "portrait"
		},
		"5" : {
			src:"images/fish-man.jpg",
			type : "portrait"
		},
    "6" : {
      src:"images/boats.jpg",
      type : "other"
    },
		"7" : {
			src:"images/balloon-man.jpg",
			type : "portrait"
		},
    "8" : {
      src:"images/view-from-the-top.jpg",
      type : "other"
    },
		"9" : {
			src:"images/michelle.jpg",
			type : "portrait"
		}
	}
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

$('.slider').on('click', function(){
	$('.photos').toggle();
	$('.slider').toggle();
});

$('.thumbnail').on('click', function () {
	var thisPhoto = $(this)[0].innerHTML;
	$('.photos').toggle();
	$('.slider').toggle();
	$('.image').html('<div id="fullImage">'+ thisPhoto +'</div>');
});

$('#closeButton').on('click', function(){
	$('.photos').toggle();
	$('.slider').toggle();
});

$('#home').on('click', function(e){
	e.preventDefault();
	$('.other').show();
	$('.portrait').show();
	if(window.location.pathname !== "/"){
		window.location.pathname = "/";
	}
});

if(window.location.pathname !== "/"){
	$('#portraits').hide();
	$('#other').hide();
}

