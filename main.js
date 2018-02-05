
// filter 
$(window).on('load', function() {
	$(".filter-point").on('click', function() { //click on one of filter parameter
		
		$(".filter-point").removeClass('active'); // delete class active from all filter parameters
		$(this).addClass('active'); // and add class active for actual filter parameter

		var block = $(".block"); 
		var actualFilter = $(this).attr('filterParameter');

		block.addClass('hide-block'); // hide all blocks

 		if (actualFilter === 'all') { //check what kind of filter parameter chose
 			block.removeClass('hide-block'); //If filter parameter 'ALL', remove class 'Hide-block' from all blocks, and can see all of them on page
 		}else { // if clicked other filter parameter
 			for (var i = 0; i < block.length; i++) { 
 				if ($(block[i]).hasClass(actualFilter)) { // I find from ALL blocks, what has a Class name like attribute of actual filte parameter
 					$(block[i]).removeClass('hide-block'); // And if find something , remove from it class Hide-block
 				};
 			};
 		};	
	});
});