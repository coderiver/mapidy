$(document).ready(function() {


	// ---------- Popup for contact information -------------------- //
		$('.js-drop').click(function() {
		 if ($(this).hasClass('is-open')) {
		  $(this).removeClass('is-open');
		  $('.js-dropdown').fadeOut();
		 }
		 else {
		  $(this).addClass('is-open');
		  $('.js-dropdown').fadeIn();
		 }
		 return false;
		});

		$(document).click(function() {
		 $('.js-drop').removeClass('is-open');
		 $('.js-dropdown').fadeOut();
		});
		$('.js-dropdown').click(function(event){
		    event.stopPropagation();
		});


});