// var i = 255;
var r = 33;
var g = 200;
var b = 22;

setInterval(function() {
  $("body").css("background-color", "rgb("+r+","+g+","+b+")");
  // i = Number(i);
  r += 10;
  g += 2;
  b -= 20;
  // i.toString();
  console.log(r)
  console.log(g)
  console.log(b)
  $("p").html("rgb("+r+","+g+","+b+")");
}, 300);
