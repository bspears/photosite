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

