//lets move some boxes

$(document).ready(function(){

  // this expands a box
  $("*").on("click", function() {
    $("#box0").animate({ top: "50px", right: "80px" }, "fast");
    $("#box0").text("Now I'm a Rectangle");
  });

  // let's move a box
  $("#box1").onmousover(function() {
    $("this").animate({ marginleft: "154px" }, "fast");
    // $("#box1").text("Am I moving?");
  });
});