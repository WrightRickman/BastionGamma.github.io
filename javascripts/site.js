$(function(){

	redrawDotNav();

	$(window).bind('scroll', function(e){
		parallaxScroll();
		redrawDotNav();
	});

	$('nav#primary a').hover(
		function(){
			$(this).prev('h3').show();
		},
		function(){
			$(this).prev('h3').hide();
		}
	);

	$(".home-link").click(function(e) {
		e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#home-link").offset().top
    }, 2500);
	});

	$(".dev-link").click(function(e) {
		e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#dev-link").offset().top
    }, 2500);
	});

	$(".resume-link").click(function(e) {
		e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#resume-link").offset().top
    }, 2500);
	});

	$(".arrow-to-dev").click(function(e) {
		e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#dev-link").offset().top
    }, 2500);
	});

	$(".arrow-to-res").click(function(e) {
		e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#resume-link").offset().top
    }, 2500);
	});

	$(".arrow-to-top").click(function(e) {
		e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#home-link").offset().top
    }, 2500);
	});
});

function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('.astronaut').css('top', (1650 - (scrolled * .75)) + 'px');
	$('.alien').css('top', (4475 - (scrolled * .75)) + 'px');
	$('.debris1').css('top', (450 - (scrolled * .50)) + 'px');
	$('.debris2').css('top', (1200 - (scrolled * .50)) + 'px');
	$('.planet').css('top', (350 - (scrolled * .25)) + 'px');
	$('.planet2').css('top', (725 - (scrolled * .25)) + 'px');
}

function redrawDotNav(){
	var section1Top =  0;
	var section2Top =  $('#dev-link').offset().top - (($('#resume-link').offset().top - $('#dev-link').offset().top) / 2);
	var section3Top =  $('#resume-link').offset().top - (($(document).height() - $('#resume-link').offset().top) / 2);
	$('nav#primary a').removeClass('active');
	if ($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.home-link').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.dev-link').addClass('active');
	} else if ($(document).scrollTop() >= section3Top) {
		$('nav#primary a.resume-link').addClass('active');
	}
}