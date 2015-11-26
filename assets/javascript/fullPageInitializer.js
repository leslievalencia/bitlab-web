$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['main', 'services']
	});
	resizeSlidebar();
	toggleMenu();
});

$(window).resize(resizeSlidebar);

function resizeSlidebar() {
	$('.slidebar').outerHeight($(window).height());
}

function toggleMenu() {
	state = ($('.slidebar').position().left >= $( window ).width());
	movement = state ? "+=600" : "-=600";
	imageUrl = state ? "img/cerrar.png" : "img/menu.png";
	$('.slidebar').animate({ right: movement });
	$('.menu').attr("src", imageUrl)
}