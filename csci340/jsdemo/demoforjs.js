$(document).ready(function(){
  var trafficLight1 = function(){
    $("#introduction").html("Red Light!");
    $("img").attr("src", "images/red.png");
    $("#clicker").click(trafficLight2);

  }
  var trafficLight2 = function(){
    $("#introduction").html("Green Light!");
    $("img").attr("src", "images/green.png");
    $("#clicker").click(trafficLight3);
  }
  var trafficLight3 = function(){
    $("#introduction").html("Yellow Light!");
    $("img").attr("src", "images/yellow.png");
    $("#clicker").click(trafficLight1);
  }

  $("#clicker").click(trafficLight1);
  //$("#clicker").click(trafficLight2);
  //$("#clicker").click(trafficLight3);


});
