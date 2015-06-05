$(document).ready(function() {
	$fadeTime = 1000;
	$delayTime = 2000;
	$('#intro-text-one').hide().delay(500).fadeIn($fadeTime, function() {
		$('#intro-text-one').delay($delayTime).fadeOut($fadeTime, function() {
			$('#intro-text-two').fadeIn($fadeTime, function() {
				$('#intro-text-two').delay($delayTime).fadeOut($fadeTime, function() {
					$('#intro-text-three').fadeIn($fadeTime, function() {
						$('#intro-underline').delay($delayTime).animate({'width': '100%'}, 1300, function() {
							$('.intro-page').fadeOut($fadeTime, function() {
								$('#white-bg').delay(3000).fadeOut($fadeTime);
								$('.homepage').delay(3000).fadeIn($fadeTime);
							});
						});
					});
				});
			});	
		});
	});
	$('.skip-intro').click(function() {
		$(this).fadeOut($fadeTime);
		$('.intro-page').fadeOut($fadeTime);
		$('#white-bg').fadeOut($fadeTime);
		$('.homepage').fadeIn($fadeTime);
	});

	// Load header
	$('.menu-bar').load('ajax/header.html');
	//Load side menu 
	$('.side-menu').load('ajax/side-menu.html');
	//Load footer
	$('.footer').load('ajax/footer.html');
});

// Show or hide side menu
$(document).on('click','.fa-bars',function() {
	$('.side-menu').animate({'margin-left': 0});
});	
$(document).on('click','.fa-times',function() {
	$('.side-menu').animate({'margin-left': '-500px'});
});
