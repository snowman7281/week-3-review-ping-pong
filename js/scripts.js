//Business Logic(Back-End)
var swaps = ["ping", "pong", "ping-pong"];

//check to make sure its a number



//UI Userinterface(Front-End)
$(document).ready(function(){
  $("#ping-pong-form").submit(function(event){
    event.preventDefault();
    var numInput = parseInt($("#num").val());
    $("#output").text();
  });
});
