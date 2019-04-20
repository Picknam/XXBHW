$('.open').click(function () {
	$('.more').slideToggle(1000);
})
$('.serve').mouseenter(function(){
	$('.way').slideToggle(500);
})
$('.serve').mouseleave(function(){
	$('.way').slideToggle(500);
})
$('#search').click(function() {
	$('.box,.bo').show(1000);
	$('.other,.serve').hide();
	$('#aa').css({
		"background-color":"#8C8C8C",
		"opacity":"0.5"
		})
})
$('.bo>i').click(function () {
	$('.box,.bo').hide();
	$('.other,.serve').show(1000);
	$('#aa').css({
		"background-color":"",
		"opacity":"1"
		})
})