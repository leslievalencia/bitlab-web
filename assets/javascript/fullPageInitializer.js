$(document).ready(function() {
 $('#fullpage').fullpage({
  anchors:['main', 'services', 'process', 'us', 'clients', 'procesocontent', 'nosotroscontent'],
  scrollOverflow: true,
  scrollingSpeed: 700,
  afterLoad: function(anchorLink, index){
   changeLogo(index);
  }
 });
 resizeSlidebarContact();
 resizeSlidebar();
 toggleMenu(0);
 toggleContact(0);
});

$(window).resize(resizeSlidebar);

function resizeSlidebar() {
 $('.slidebar').outerHeight($(window).height());
 $('.menu-container').css('margin-top', $(window).height() / 2 - $('.menu-container').height() / 2);
}

function toggleMenu( duration ) {
 state = menuStatus();
 movement = state ? "+=600" : "-=600";
 toggleContactVisibility();
 imageUrl = state ? "img/cerrar.png" : "img/menu.png";
 $('.slidebar').animate({ right: movement }, duration);
 $('.menu').attr("src", imageUrl);
}

function changeLogo( index ) {
 if (index == 3 || index == 5) {
  $('.logo').attr('src', 'img/bitlab_obscuro.png');
 } else {
  $('.logo').attr('src', 'img/bitlab.png');
 }
}

function toggleContactVisibility() {
 $('.contactBtn').css("display") == "none" ?  $('.contactBtn').delay(400).show(400) : $('.contactBtn').hide();
}

function menuStatus() {
 return ($('.slidebar').position().left >= $( window ).width());
}

function toggleContact( duration ) {
 state = ($('.slidebarContact').position().left >= $( window ).width());
 movement = state ? "+=600" : "-=600";
 $('.slidebarContact').animate({ right: movement }, duration);
 $('.contact').attr("src", imageUrl);
 if (!menuStatus() && state) {
  toggleMenu();
 }
}

function resizeSlidebarContact() {
 $('.slidebarContact').outerHeight($(window).height());
 $('.contact-container').css('margin-top', $(window).height() / 2 - $('.contact-container').height() / 2);
}
