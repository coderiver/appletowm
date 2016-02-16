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
});