;(function($){
    "use strict";
	$( window ).load(function() {


		// Copy JS Start
		let myGrid = $('.cp-grid')
		let myGridItem = '.cp-grid-item'


		$('.onload-masonry').masonry({
			itemSelector: myGridItem,
			columnWidth: myGridItem,
		})
		$('#filter > li').on('click', function(){
			let showme = $(this).attr('data-filter')
			myGrid.children(myGridItem).show()
			if (showme !== 'all') {
				myGrid.children(':not(.' + showme + ')').hide()
			}
			myGrid.removeClass('onload-masonry')
			myGrid.masonry({
				itemSelector: myGridItem,
				columnWidth: myGridItem,
			})
		});
		// Copy JS End

	});

})(jQuery)