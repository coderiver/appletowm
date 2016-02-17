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
					'name': $('#popup-form input[name=name]').val(),
					'tel': $('#popup-form input[name=tel]').val()
				};
				// Ajax post data to server
				$.post('send.php', post_data, function(response) {
					if (response.type == 'error') {
						console.log('error');
					}
					//else {
					//	// reset values in all input fields
					//	popup.removeClass('is-open');
					//	thanks.addClass('is-open');
					//	$('#popup-form').get(0).reset();
					//	setTimeout(function() {
					//		thanks.removeClass('is-open');
					//	}, 2000);
					//}
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
					//else {
					//	thanks.addClass(500);
					//	$('#form').get(0).reset();
					//	setTimeout(function() {
					//		thanks.removeClass('is-open');
					//	}, 2000);
					//}
				}, 'json');
				return false;
			}
		});
	}());

	// callback-btn

	//function FixedOnCenter(sector) {
	//	this.sector = sector;
	//
	//	return function() {
	//
	//		this.sayHi =  function() {
	//			console.log(this);
	//		}
	//
	//
	//	}
	//	return this;
	//
	//}
	////
	//var fixedBtn = new FixedOnCenter($('.js-fixed-btn'));
	//fixedBtn();
	//console.log(fixedBtn.sayHi())
	//
	var center = ($('.js-fixed-btn').offset().top + 60) - ($(window).outerHeight() / 2);
	var endPoint = $('.js-section-center').offset().top + ($('.js-section-center').outerHeight() / 2);

	function makeCenter() {

		if($(window).width() <= 1100) {
			$('.js-fixed-btn').removeClass('is-fixed');
			$('.js-fixed-btn').css('top', '50%');
			return ;
		}

		var center2 = ($('.js-section-center').offset().top + $('.js-section-center').outerHeight() / 2) - ($(window).outerHeight() / 2) ;

		if($(window).scrollTop() >= center) {
			$('.js-fixed-btn').addClass('is-fixed');
			$('.js-fixed-btn').css('top', '50%');

		} else {
			$('.js-fixed-btn').removeClass('is-fixed');
		}

		if($(window).scrollTop() >= center2) {
			$('.js-fixed-btn').removeClass('is-fixed');
			$('.js-fixed-btn').css('top', center2 + 30);
		}

	}

	$(window).on('scroll resize', makeCenter);

	$('.js-gallery').slick({
		fade: true
	});

	function initSlider() {
		$('.js-gallery').slick('unslick');
		$('.js-gallery').slick({
			fade: true,
			dots: true
		});
	}
	initSlider();
	$(window).on('load', initSlider);
	//console.log(btn.sector);


	//$('.js-link').on('click', function(){
	//	var link = $(this).attr('href');
	//	var height = $('.header').outerHeight();
	//	$('html, body').animate({
	//			scrollTop: $(link).offset().top - height
	//		}, {
	//			duration: 500,
	//		},
	//		$('.js-menu').removeClass('is-open')
	//	);
	//
	//	return false;
	//});
});