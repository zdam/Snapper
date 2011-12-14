
//var len = $('span').length;
//alert('there are ' + len + ' spans on this page' );


$('a').mouseenter(function(){
	$(this).addClass('js-snapper-highlight');
});

$('a').mouseleave(function(){
	$(this).removeClass('js-snapper-highlight');
});