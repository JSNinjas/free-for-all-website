$(document).ready(function(){

	function scrollToHash(hash){

		var target = hash,
		$target = $(target);

		$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 150}, 900, 'swing', function () {
				window.location.hash = target;
		});
	}

	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();
		scrollToHash(this.hash);
	});

	scrollToHash(window.location.hash);
});
