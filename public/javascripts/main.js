var num = 1;

//load images
// for(var i in images.other){
// 	var image = images.other[i];
// 	$('.grid').append('<div class="thumbnail grid-item '+ image.type +'"><img src="'+ image.src +'"></div>');
// 	num += 1;
// 	if(num === 4){
// 		num = 1;
// 	}
// }
// var masonry = require('../../node_modules/masonry-layout/masonry.js');

$('#portraits').on('click', function(e){
	e.preventDefault();
	$('.other').hide();
	$('.portrait').show();
	$grid.masonry();
});

$('#other').on('click', function(e){
	e.preventDefault();
	$('.other').show();
	$('.portrait').hide();
	$grid.masonry();
});

$('.slider').on('click', function(){
	$('.photos').toggle();
	$('.slider').toggle();
});

$('.thumbnail').on('click', function () {
	var thisPhoto = $(this)[0].src;
	console.log($(this)[0].src);
	$('.photos').toggle();
	$('.slider').toggle();
	$('.image').html('<div id="fullImage"><img src="'+ thisPhoto +'"></div>');
});

$('#closeButton').on('click', function(){
	$('.photos').toggle();
	$('.slider').toggle();
});

$('#home').on('click', function(e){
	if(window.location.pathname !== "/"){
		window.location.pathname = "/";
	}
	e.preventDefault();
	$('.other').show();
	$('.portrait').show();
	$grid.masonry();
});

if(window.location.pathname !== "/"){
	$('#portraits').hide();
	$('#other').hide();
}

	var $grid = $('.grid').masonry({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  columnWidth: '.grid-sizer'
	});
	// layout Isotope after each image loads
	$grid.imagesLoaded().progress( function() {
	  $grid.masonry();
	}); 

