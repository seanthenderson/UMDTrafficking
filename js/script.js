
$(document).ready(function() {
	$fadeTime = 1000;
	$delayTime = 2000;
	intro = function() {
		$('body').css({'overflow': 'hidden'});
		$('#intro-text-one').hide().delay(500).fadeIn($fadeTime, function() {
			$('#intro-text-one').delay($delayTime).fadeOut($fadeTime, function() {
				$('#intro-text-two').fadeIn($fadeTime, function() {
					$('#intro-underline').delay($delayTime).animate({'width': '100%'}, 1300, function() {
						$('.intro-page').fadeOut($fadeTime, function() {
							$('#white-bg').delay(3000).fadeOut($fadeTime);
							$('.homepage').delay(3000).fadeIn($fadeTime, function() {
								setTimeout(function() {
									$('body').css({'overflow': 'auto'});
								}, 1000);
							});
						});
					});
				});
			});
		});	
	}
	skipIntro = function() {
		$('.skip-intro').fadeOut($fadeTime);
		$('.intro-page').delay(350).fadeOut($fadeTime);
		$('#white-bg').fadeOut($fadeTime);
		$('.homepage').fadeIn($fadeTime);
		$('body').css({'overflow': 'auto'});
	}

	// Skip intro on button click 
	$('.skip-intro').click(function() {skipIntro()});

	// Create cookie value to display intro only once
   	function createCookie(name,value,days) {
	   	if (days) {
   	        var date = new Date();
   	        date.setTime(date.getTime()+(days));
   	        var expires = "; expires="+date.toGMTString();
	   	}
	   	else var expires = "";
	   	    document.cookie = name+"="+value+expires+"; path=/";
   	}

   	// Read user's cookie value
   	function readCookie(name) {
	   	var nameEQ = name + "=";
	   	var ca = document.cookie.split(';');
	   	for(var i=0;i < ca.length;i++) {
   	        var c = ca[i];
   	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
   	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	   	}
	   	return null;
   	}

   	// Erase user cookie
   	function eraseCookie(name) {
   	    createCookie(name,"",-1);
   	}

   	// Hide or show intro based on cookie value
   	if (!readCookie('alreadyShown')) {
   	  intro();
   	  createCookie('alreadyShown', true);
   	} else {
   		$('.skip-intro, .intro-page, #white-bg').hide();
		$('.homepage').show();
   	}

	// Load footer
	$('.footer').load('ajax/footer.html');

	$('.fa-bars').click(function() {
		$('.side-menu').animate({'margin-left': '0'});
	});
	$('.fa-times').click(function() {
		$('.side-menu').animate({'margin-left': '-500px'});
	});
});

// Skip intro by pressing enter
$(document).keypress(function(e) {
	$fadeTime = 1000;
  	if (e.which == 13) {
	    $('.skip-intro').fadeOut($fadeTime);
		$('.intro-page').delay(350).fadeOut($fadeTime);
		$('#white-bg').fadeOut($fadeTime);
		$('.homepage').fadeIn($fadeTime);
		$('body').css({'overflow': 'auto'});
  	}
});
