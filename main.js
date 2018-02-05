
// filter of products on catalog page
$(window).on('load', function() {
	$(".filter-point").on('click', function() {
		
		$(".filter-point").removeClass('active');
		$(this).addClass('active');

		var block = $(".block");
		var actualFilter = $(this).attr('filterParameter');

		block.addClass('hide-product');

 		if (actualFilter === 'all') {
 			block.removeClass('hide-product');
 		}else {
 			for (var i = 0; i < block.length; i++) {
 				if ($(block[i]).hasClass(actualFilter)) {
 					$(block[i]).removeClass('hide-product');
 				};
 			};
 		};	
	});
});