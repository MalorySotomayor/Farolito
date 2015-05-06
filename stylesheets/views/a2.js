$(document).ready(function(){
	var $circleDashed = $('.circle-dashed');
	$circleDashed.hover(function(){
		$('.circle-orange').toggleClass('active');
		$('.circle-text').toggleClass('hidden');
		$('.circle-text-hover').toggleClass('hidden');
	});
});


$('button').click(function() {
	$('.parrafo').toggle();
});

$('circle-text').hover(function(){
	$(this).toggleClass('circle-text-hover');
});