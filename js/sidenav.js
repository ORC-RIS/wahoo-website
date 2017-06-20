//This script causes the extended team sidebar to highlight on scroll.

$(document).scroll(function() {
	// Get current scroll position
	var scroll_top = $(document).scrollTop() + 95;
	
	// Count the number of items in side nav
	var count = document.getElementById("sidenav").childElementCount;
	
	// Fill array with the position of each element
	var scrollPoint = [];
	for(var i=0;i<count;i++){
		scrollPoint[i] = $('#Team' + (i+1)).position().top;
	}
	
	// Compare current position with table positions
	// First if checks if the current pos is above all tables
	if(scroll_top < scrollPoint[0]){
		$('#sidenav li a').removeClass('active');	// Removes all if scrolled to top
	}
	// Second if checks tables 1 through n-1
	else if(scroll_top >= scrollPoint[0] && scroll_top < scrollPoint[count-1]){
		for(var i = 0;i<count;i++){
			if(scroll_top > scrollPoint[i] && scroll_top < scrollPoint[i+1]){
				$('#sidenav li a').removeClass('active');	// Removes from all other items
				$('#nav' + (i+1)).addClass('active');	// Adds active to element
				break;
			}
		}
	}
	// Third if highlights the item n for the last table
	else if(scroll_top >= scrollPoint[count-1]) {
		$('#sidenav li a').removeClass('active');	// Removes from all other items
		$('#nav' + (count)).addClass('active');	// Adds active to element
	}
});