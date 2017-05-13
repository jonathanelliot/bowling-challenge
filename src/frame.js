'use strict'

function Frame() {
  this.frameScore = 0
  this.START_PINS = 10
}

var score = [];

Frame.prototype.bowl = function() {
  var bowlOneScore = Math.floor(Math.random() * 11);
  this.frameScore += bowlOneScore;
  console.log('first-score')
  console.log(this.frameScore);
  if(this.frameScore === 10) { //strike!
      console.log('strike => next frame')
      score.push(this.frameScore);
      this.nextFrame();
  } else {
    this.bowlAgain();
  }
};

Frame.prototype.bowlAgain = function() {
  var pinsLeft = 10 - this.frameScore + 1
  var bowlTwoScore = Math.floor(Math.random() * pinsLeft);
  console.log('second-score')
  console.log(bowlTwoScore);
  this.frameScore += bowlTwoScore;
  console.log(this.frameScore);
  if(this.frameScore === 10) { //spare!
    console.log('spare => next frame');
    score.push(this.frameScore);
    this.nextFrame();
  }
  else {
    console.log('next frame')
    score.push(this.frameScore);
    this.nextFrame();
  }
};

Frame.prototype.nextFrame = function() {
  new Frame();
  console.log(new Frame())
  this.frameScore = 0

  console.log(this.frameScore);
};
