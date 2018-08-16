// Jquery Required and absolute positioning in css
// keycode Notes
// 37 = arrowleft  | 38 = arrowup
// 39 = arrowright | 40 = arrowdown
var logo1 = document.querySelector('img')
var $theobject = $('img') // this is the object you like to operated on

// the below catches the keyboard keys pressed
var $html = $("html")
$html.on("keydown", function(e) {
  if(e.keyCode === 37) {objectmove(37);}
  else if (e.keyCode === 39) {objectmove(39);}
  else if (e.keyCode === 40) {objectmove(40);}
  else if (e.keyCode === 38) {objectmove(38);}
})

// The clicks functions are using 4 buttons in the index.html via ID to move the object around
$("#up").click(function() {objectmove(38);})
$("#down").click(function(){objectmove(40);})
$("#left").click(function(){objectmove(37);})
$("#right").click(function(){objectmove(39);})
// below is the function that alters the css to move the object the 10's are the amount of movement per click.
function objectmove(keyCode){
  if (keyCode === 37){
    var current = $theobject.offset().left;
    $theobject.css("left", current -10);}
  else if (keyCode === 39){
    var current = $theobject.offset().left
    $theobject.css("left", current +10);}
  else if (keyCode === 40){
    var current = $theobject.offset().top
    $theobject.css("top", current +10);}
  else if (keyCode === 38){
    var current = $theobject.offset().top
    $theobject.css("top", current -10);}
}
