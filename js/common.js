$(document).ready(function() {


	// ---------- Popup for create dropdown -------------------- //
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

	// ---------- Popup for people list page -------------------- //
		$('.js-invite').click(function() {
		 if ($(this).hasClass('is-open')) {
		  $(this).removeClass('is-open');
		  $(this).parent().children('.js-invite-drop').fadeOut();
		 }
		 else {
		  $(this).addClass('is-open');
		  $(this).parent().children('.js-invite-drop').fadeIn();
		 }
		 return false;
		});

		$(document).click(function() {
		 $('.js-invite').removeClass('is-open');
		 $('.js-invite-drop').fadeOut();
		});
		$('.js-invite-drop').click(function(event){
		    event.stopPropagation();
		});

	// ---------- Popup with overlay for people list page -------------------- //
		$('body').click(function(){
			$('.overlay,.popup').toggleClass('is-shown');
		});

	// ----------------  Chosen plagin -------------------- //
		$(".chzn-select").chosen({disable_search_threshold: 100});

});