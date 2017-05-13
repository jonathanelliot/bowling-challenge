'use strict'

function Frame() {
  this.score = 0
  this.pinsStanding = 10
}

Frame.prototype.bowl = function() {
  console.log(this.score);
  var frameScore = Math.floor(Math.random() * 11);
  this.score += frameScore;
  console.log(this.score);
  if(this.score === 10) { //strike!
      console.log('strike')
  } else {
    console.log('bowl again');
  }
};

Frame.prototype.bowlAgain = function() {
  var pinsLeft = 10 - this.score + 1
  console.log(this.score);
  var frameScore = Math.floor(Math.random() * pinsLeft);
  this.score += frameScore;
  console.log(this.score);
  if(this.score === 10) { //spare!
    console.log('spare');
  }
  else {
  }
};

Frame.prototype.nextFrame = function() {
  new Frame();
};
