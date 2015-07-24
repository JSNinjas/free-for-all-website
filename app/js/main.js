$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 40}, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});