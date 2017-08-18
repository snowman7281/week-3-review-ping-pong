//Business Logic(Back-End)
function pingPong(numberInput){
  var numArray = [];

  if(numberInput < 0){
    for(var i = -1; i >= numberInput; i--){
      numArray.push(index);
    }
    numArray.forEach(function(num){
      if(num % 15 === 0){
        numArray[-num-1] = "pingpong";
      }else if(num % 3 === 0){
        numArray[-num-1] = "ping";
      }else if(num % 5 === 0){
        numArray[-number-1] = "pong";
      }
    });
  }else if(numberInput > 0){
    for(var i = 1; i <= numberInput; i++){
      numArray.push(i);
    }
    numArray.forEach(function(num){
      if(num % 15 === 0){
        numArray[num-1] = "pingpong";
      }else if(num % 3 === 0){
        numArray[num-1] = "ping";
      }else if(num % 5 === 0){
        numArray[num-1] = "pong"
      }
    });
  }
  return numArray;
};

function addLineDisplay(arrayOut) {
    $('ul#result').empty();
  arrayOut.forEach(function(item) {
    $('ul#output').append('<li>' + item + '</li>');
  });
  return;
}
var addLineDisplay = function(addLinesArray){
  $("#output").empty();
  addLinesArray.forEach(function(lineInput){
    $("#output").append("This is your results!" + "<li>" + lineInput + "</li>" )
  });
  return;
}

//UI Userinterface(Front-End)
$(document).ready(function(){
  $("#ping-pong-form").submit(function(event){
    var numberInput = $("input#num").val();
    addLineDisplay(pingPong(numberInput));
    //$("#output").text(pingPong(numberInput));
    event.preventDefault();
  });
});
