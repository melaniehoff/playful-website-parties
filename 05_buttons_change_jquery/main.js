$(document).ready(function() {

  $("#color").click(function() {
    $("body").css({
      "background-color": "pink"
    });
  });

  $("#text").click(function() {
    $("p").html("falling failing feeling freeing");
  });

  $("#show").click(function() {
    $(this).attr("src", "2.png");
  });

});
