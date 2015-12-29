$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors:['main', 'services', 'process', 'us', 'clients', 'procesocontent', 'nosotroscontent', 'pasos'],
    scrollOverflow: true,
    scrollingSpeed: 700,
    afterLoad: function(anchorLink, index){
      changeColor(index);
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
var file_config = {
  "daniel.html": [3, 5],
  "proceso.html": [2, 3],
  "nosotros.html": [2, 5]
};

function posicion() {
  var url = location.href.split('/');
  var file = url[url.length -1].split('#')[0];
  return file_config[file];
}


function changeColor( index ) {
  var sections = posicion() || [];
  if (sections.indexOf(index) >= 0) {
    $('.logo').attr('src', 'img/bitlab_obscuro.png');
    $('.menu').attr('src', 'img/menu_obscuro.png');
    $('.contactBtn').css('color', 'black');
  } else {
    $('.logo').attr('src', 'img/bitlab.png');
    $('.menu').attr('src', 'img/menu.png');
    $('.contactBtn').css('color', 'white');
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
