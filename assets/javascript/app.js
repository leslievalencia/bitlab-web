var section1 = {
 "image" : "img/s-desarrollo.png",
 "title" : "01",
 "subtitle" : "Desarrollo web",
 "content" : "Lorem ipsum dolor sit amet cconsectetur adipiscing elit nam malesuada dictum mauris sit amet porttitor nisl dignissim integer ac felis volutpat posuere orci"
};

var section2 = {
 "image" : "img/s-diseño.png",
 "title" : "02",
 "subtitle" : "Diseño web",
 "content" : "Lorem ipsum dolor sit amet cconsectetur adipiscing elit nam malesuada dictum mauris sit amet porttitor nisl dignissim integer ac felis volutpat posuere orci"
};

var section3 = {
 "image" : "img/s-grafico.png",
 "title" : "03",
 "subtitle" : "Diseño gráfico",
 "content" : "Lorem ipsum dolor sit amet cconsectetur adipiscing elit nam malesuada dictum mauris sit amet porttitor nisl dignissim integer ac felis volutpat posuere orci"
};

var section4 = {
 "image" : "img/s-branding.png",
 "title" : "04",
 "subtitle" : "Branding",
 "content" : "Lorem ipsum dolor sit amet cconsectetur adipiscing elit nam malesuada dictum mauris sit amet porttitor nisl dignissim integer ac felis volutpat posuere orci"
};

var section5 = {
 "image" : "img/s-social.png",
 "title" : "05",
 "subtitle" : "Social Media",
 "content" : "Lorem ipsum dolor sit amet cconsectetur adipiscing elit nam malesuada dictum mauris sit amet porttitor nisl dignissim integer ac felis volutpat posuere orci"
};

var sections = [section1, section2, section3, section4, section5]

function show(secNumber){
 var section = sections[secNumber];
 $('.showimage').attr('src' , section['image']);
 $('.title').text(section['title']);
 $('.subtitle').text(section['subtitle']);
 $('.content').text(section['content']);
};
