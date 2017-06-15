//This script causes the extended team sidebar to highlight on scroll.

$(document).scroll(function() {
	var scroll_top = $(document).scrollTop() + 51;
	var team_1_top = $('#Team1').position().top;
	var team_2_top = $('#Team2').position().top;
	var team_3_top = $('#Team3').position().top;
	var team_4_top = $('#Team4').position().top;
	var team_5_top = $('#Team5').position().top;
	var team_6_top = $('#Team6').position().top;
	var team_7_top = $('#Team7').position().top;
	var team_8_top = $('#Team8').position().top;
	var team_9_top = $('#Team9').position().top;
	var team_10_top = $('#Team10').position().top;
	var team_11_top = $('#Team11').position().top;
	var team_12_top = $('#Team12').position().top;
	var team_13_top = $('#Team13').position().top;
	
	if(scroll_top < team_1_top){
		$('#sidenav li a').removeClass('active');
	}
	else if(scroll_top > team_1_top && scroll_top < team_2_top) {
		//You are now on team 1
		$('#sidenav li a').removeClass('active');
		$('#nav1').addClass('active');
	} else if( scroll_top > team_2_top && scroll_top < team_3_top) {
		//You are now on team 2
		$('#sidenav li a').removeClass('active');
		$('#nav2').addClass('active');
	}
	else if( scroll_top > team_3_top && scroll_top < team_4_top) {
		//You are now on team 3
		$('#sidenav li a').removeClass('active');
		$('#nav3').addClass('active');
	}
	else if( scroll_top > team_4_top && scroll_top < team_5_top) {
		//You are now on team 4
		$('#sidenav li a').removeClass('active');
		$('#nav4').addClass('active');
	}
	else if( scroll_top > team_5_top && scroll_top < team_6_top) {
		//You are now on team 5
		$('#sidenav li a').removeClass('active');
		$('#nav5').addClass('active');
	}
	else if( scroll_top > team_6_top && scroll_top < team_7_top) {
		//You are now on team 6
		$('#sidenav li a').removeClass('active');
		$('#nav6').addClass('active');
	}
	else if( scroll_top > team_7_top && scroll_top < team_8_top) {
		//You are now on team 7
		$('#sidenav li a').removeClass('active');
		$('#nav7').addClass('active');;
	}
	else if( scroll_top > team_8_top && scroll_top < team_9_top) {
		//You are now on team 8
		$('#sidenav li a').removeClass('active');
		$('#nav8').addClass('active');
	}
	else if( scroll_top > team_9_top && scroll_top < team_10_top) {
		//You are now on team 9
		$('#sidenav li a').removeClass('active');
		$('#nav9').addClass('active');
	}
	else if( scroll_top > team_10_top && scroll_top < team_11_top) {
		//You are now on team 10
		$('#sidenav li a').removeClass('active');;
		$('#nav10').addClass('active');
	}
	else if( scroll_top > team_11_top && scroll_top < team_12_top) {
		//You are now on team 11
		$('#sidenav li a').removeClass('active');
		$('#nav11').addClass('active');
	}
	else if( scroll_top > team_12_top && scroll_top < team_13_top) {
		//You are now on div team 12
		$('#sidenav li a').removeClass('active');
		$('#nav12').addClass('active');
	}
	else if( scroll_top > team_13_top) {
		//You are now on div team 13
		$('#sidenav li a').removeClass('active');
		$('#nav13').addClass('active');
	}
});