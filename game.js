var buttonColors=["red", "blue", "green", "yellow"];

var gamePattern = [];
// generating a random number
function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
}
// by the random number we get the color
var randomChosenColour = buttonColors[randomNumber];
// shtojme ngjyren
gamePattern.push(randomChosenColour);
//random ID qe zgjedh nje ngjyre dhe e pulson ate
$(document).ready(function(){
  $("button").click(function(){
    $("#gamePattern\\[randomChosenColour\\]").animateHighlight("#dd0000", 1000);
  });
});

function makeSound(button) {

  switch (button) {
    case "blue":
      var blue_sound = new Audio("sounds\blue.mp3");
      blue_sound.play();
      break;

    case "green":
      var green_sound = new Audio("sounds\green.mp3");
      green_sound.play();
      break;

    case "red":
      var red_sound = new Audio('sounds\red.mp3');
      red_sound.play();
      break;

    case "yellow":
      var yellow_sound = new Audio('sounds\yellow.mp3');
      yellow_sound.play();
      break;

    default: var wrong_sound = new Audio('sounds\wrong.mp3');
    wrong_sound.play();
    break;
  }
}
