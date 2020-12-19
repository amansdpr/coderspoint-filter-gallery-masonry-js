;(function($){
    "use strict";

	$(window).on('load', function(){

		// Preloader Js
	  	$('#preloader').fadeOut()


		// Copy JS Start
		let myGrid = $('.cp-grid')
		let myGridItem = '.cp-grid-item'


		$('.onload-masonry').masonry({
			itemSelector: myGridItem,
			columnWidth: myGridItem,
		})
		$('#cp-filter > li').on('click', function(){
			let showme = $(this).attr('data-filter')
			myGrid.children(myGridItem).show()
			if (showme !== 'all') {
				myGrid.children(myGridItem).not('.' + showme ).not('.first-item').hide()
			}
			myGrid.removeClass('onload-masonry')
			myGrid.masonry({
				itemSelector: myGridItem,
				columnWidth: myGridItem,
			})

			// for active filter li element
			$(this).addClass('active').siblings('li').removeClass('active')


		});
		// Copy JS End


	}); // windows.on.load
	



})(jQuery)