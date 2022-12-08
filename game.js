let numClick = -1;
let userPattern = [];
let correctPattern = [];
let possibleColors = ["red", "blue", "green", "yellow"];

let level = 0;
let highscore = 0;

$(".btn").click(function(buttonClicked){
  numClick++;
  let color = buttonClicked.target.id;
  clickAnimation("#" + color);
  playAudio(color);
});

function checkAnswer(color){
  userPattern.push(color);
  if(color == correctPattern[numClick]){
    if(userPattern.length == correctPattern.length){
      setTimeout(function){
        userPattern = [];
        numClick = -1;
        nextSequence();
      }
    } else {

    }
  } else{
    $("h2").text("Game Over! Hit another key to try again");
    userPattern =0;
    correctPattern= [];
    if(level>highscore){
      highscore = level;
      $("#highscore").text(level);
    }
    level = 0;
    numClick= -1;
  }
}

function nextSecuence(){
  level++;
  $("#level").text(level);
  let rand = Math.floor(Math.random() * 4);
  let color = possibleColors[rand];
  correctPattern.push(color);
  playAudio(color);
  clickAnimation("#" + color);
}

function playAudio(color){
  let relPath = 'sounds/$(color).mp3';
  let audio = new Audio(relPath);
  audio.play();
}

function clickAnimation(id){
  $(id).fadeOut(100).fadeIn(100);
}

$(document).keydown(function(){
  if(level <=0){
    $("h2").text("The game begins!");
    nextSecuence();
  }
});
