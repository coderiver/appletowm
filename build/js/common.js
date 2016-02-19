$(document).ready(function() {

	// mask
	$('.js-phone').mask("+7 999-999-99-99");
	// form validation
	(function() {
		var popup   = $('.js-popup'),
			thanks  = $('.js-thanks-popup'),
			body    = $('body');
		// welcome
		$.validate({
			form: '#popup-form',
			onSuccess: function() {
				post_data = {
					'name': $('#form input[name=name]').val(),
					'tel': $('#form input[name=tel]').val(),
					'email': $('#form input[name=email]').val(),
					'comment': $('#form textarea[name=comment]').val()
				};
				// Ajax post data to server
				$.post('send.php', post_data, function(response) {
					if (response.type == 'error') {
						console.log('error');
					}
					else {
						// reset values in all input fields
						thanks.fadeIn();
						$('#popup-form').get(0).reset();
						setTimeout(function() {
							thanks.fadeOut();
						}, 2000);
					}
				}, 'json');
				return false;
			}
		});
		// footer
		$.validate({
			form : '#form',
			onSuccess: function() {
				post_data = {
					'name': $('#form input[name=name]').val(),
					'surname': $('#form input[name=surname]').val(),
					'tel': $('#form input[name=tel]').val(),
					'email': $('#form input[name=email]').val(),
					'comment': $('#form textarea[name=comment]').val()
				};
				// Ajax post data to server
				$.post('send.php', post_data, function(response) {
					if (response.type == 'error') {}
					else {
						thanks.fadeIn();
						$('#form').get(0).reset();
						setTimeout(function() {
							thanks.fadeOut();
						}, 2000);
					}
				}, 'json');
				return false;
			}
		});
	}());
	// callback-btn
	(function (){
		function reCount() {
			btnOffset = $('.js-helper').offset().top;
		}
		reCount();
		var btnOffset = $('.js-helper').offset().top;
		function makeCenter() {
			var scrollPos	 = $(window).scrollTop();
			var btn	 = $('.js-fixed-btn');
			var btnHeight	 = btn.outerHeight(true);
			var win = $(window);
			var section = $('.js-section-center');

			var positionAbs = section.offset().top - btnOffset + section.outerHeight()/2 - btnHeight/2;

			if(scrollPos > 0 && scrollPos < positionAbs && win.width() > 1100) {
				btn.addClass('is-fixed').css('top', 'initial');
				$('.test').css('top', 'initial')

			} else if(scrollPos == 0 || win.width() < 1101){
				btn.removeClass('is-fixed').css('top', 'initial');
				$('.test').css('top', 'initial')

			} else  {
				btn.removeClass('is-fixed').css('top', positionAbs);
				$('.test').css('top', positionAbs)

			}

		}

		$(window).on('scroll resize', makeCenter);
		$(window).on('resize', reCount);

	})();

	$('.js-gallery').slick({
		fade: true,
		dots: true,
		arrows: true
	});

	function initSlider() {
		$('.js-gallery').slick('unslick');
		$('.js-gallery').slick({
			fade: true,
			dots: true,
			arrows: true
		});
	}
	initSlider();
	$(window).on('load', initSlider);
	//console.log(btn.sector);


	$('.js-link').on('click', function(){
		var link = $(this).attr('href');
		var height = $('.header').outerHeight();
		$('html, body').animate({
				scrollTop: $(link).offset().top - height
			}, {
				duration: 200,
			},
			setTimeout(function(){
				$('.js-popup').fadeOut();
				$('.js-layer').fadeOut();

			},200)

		);

		return false;
	});

	//open-popup
	$('.js-show-popup').on('click', function() {
		var link = $(this).data('popup');
		var popup = $('.js-popup[data-popup="' + link + '"]');

		$('.js-popup').fadeOut();
		$('.js-layer').fadeIn();
		popup.fadeIn();
		//if($(this).hasClass('js-album')) {
		//
		//}
		if(popup.hasClass('popup-gallery')) {
			initSlider();
			var index = +$(this).data('index');
			//console.log(index);
			$('.js-gallery').slick('slickGoTo', index-1);
		}

		return false;
	});

	//close-popup
	$('.js-close-popup').on('click', function() {
		var popup = $(this).parents('.js-popup');
		popup.fadeOut();
		$('.js-layer').fadeOut();
		return false;
	});

});