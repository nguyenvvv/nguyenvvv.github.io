$(document).ready(function(){
  $("#introduction").html();
  var trafficLight1 = function(){
    $("img").attr("src", "images/red.png");
    
  }
  var trafficLight2 = function(){
    $("img").attr("src", "images/green.png");
  }
  var trafficLight3 = function(){
    $("img").attr("src", "images/yellow.png");
  }

  $("clicker").click(trafficLight1);
  $("clicker").click(trafficLight2);
  $("clicker").click(trafficLight3);


});
