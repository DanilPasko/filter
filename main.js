
// filter 
$(window).on('load', function() {
	$(".filter-point").on('click', function() { //chose one of filter parameter
		
		$(".filter-point").removeClass('active'); // delete class 'active' from all filter parameters
		$(this).addClass('active'); // and add class 'active' for actual filter parameter - it's for some styles for actual filter parameter

		var block = $(".block");  // blocks for filtration
		var actualFilter = $(this).attr('filterParameter'); // find attribute name of actual filter parameter

		block.addClass('hide-block'); // hide all blocks 

//check what kind of filter parameter chose
 		if (actualFilter === 'all') { //If filter parameter 'ALL'
 			block.removeClass('hide-block'); //show all blocks 
 		}else { // if chose other filter parameter
 			for (var i = 0; i < block.length; i++) { 
 				if ($(block[i]).hasClass(actualFilter)) { // find from all blocks, only those that have a class like attribute of actual filter parameter
 					$(block[i]).removeClass('hide-block'); // And if find something, show them 
 				};
 			};
 		};	
	});
});