$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['main', 'services', 'process']
	});
	resizeSlidebar();
	toggleMenu();
});

$(window).resize(resizeSlidebar);

function resizeSlidebar() {
	$('.slidebar').outerHeight($(window).height());
	$('.menu-container').css('margin-top', $(window).height() / 2 - $('.menu-container').height() / 2);
}

function toggleMenu() {
	state = ($('.slidebar').position().left >= $( window ).width());
	movement = state ? "+=600" : "-=600";
	imageUrl = state ? "img/cerrar.png" : "img/menu.png";
	$('.slidebar').animate({ right: movement });
	$('.menu').attr("src", imageUrl)
}